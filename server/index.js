require('dotenv').config()
const express = require('express'),
        massive = require('massive'),
        cors = require('cors'),
        session = require('express-session'),
        chalk = require('chalk'),
        bodyParser = require('body-parser'),
        socket = require('socket.io')
        

const authCTRL = require('./controllers/authController')
const prodCTRL = require('./controllers/productControllers')

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env


const app = express(),
    io = socket(
        app.listen(SERVER_PORT, ()=> console.log(chalk.cyan("Server is on mLord")
))
    )












    
app.use(express.json())
app.use(cors())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 6000
    }
}))

// ENDPOINTS
// REGISTER N LOGIN N LOGOUT
app.post('/auth/register', authCTRL.register)
app.post('/auth/login', authCTRL.login)
app.delete('/auth/logout', authCTRL.logout)

// GET
app.get('/api/helmet', prodCTRL.getHelmets)
app.get('/api/shoulders', prodCTRL.getShoulders)
app.get('/api/shafts' ,prodCTRL.getShafts)
app.get('/api/heads', prodCTRL.getHeads)
app.get('/api/gloves', prodCTRL.getGloves)
app.get('/api/elbows', prodCTRL.getElbows)

// Post
app.post('/api/helmet',prodCTRL.postHelmets)
app.post('api/shoulders', prodCTRL.postShoulder)
app.post('/api/shafts', prodCTRL.postShafts)
app.post('/api/heads', prodCTRL.postHeads)
app.post('/api/gloves', prodCTRL.postGloves)
app.post('/api/elbows' , prodCTRL.postElbows)
// PUT
app.put('/api/helmet/:id', prodCTRL.updateHelmets)
app.put('/api/shoulders/:id', prodCTRL.updateShoulders)
app.put('/api/shafts/:id', prodCTRL.updateShafts)
app.put('/api/heads/:id', prodCTRL.updateHeads)
app.put('/api/gloves/:id',prodCTRL.updateGloves)
app.put('/api/elbows/:id', prodCTRL.updateElbows)


// DELETE
app.delete('/api/heads/:id', prodCTRL.deleteHeads)
app.delete('/api/shoulders/:id', prodCTRL.deleteShoulder)
app.delete('/api/gloves/:id', prodCTRL.deleteGloves)
app.delete('/api/helmet/:id', prodCTRL.deleteHelmets)
app.delete('/api/shafts/:id',prodCTRL.deleteShafts)
app.delete('/api/elbows/:id',prodCTRL.deleteElbows)

// TO HOST
app.use( express.static( `${__dirname}/../build` ) );

massive(CONNECTION_STRING)
    .then(db =>{
        app.set('db', db);
        console.log(chalk.cyan('database is connected'));
        
    })
    .catch(error=> console.log(chalk.red('database connection severed'))
    )



    io.on("connection", socket => {
        console.log("User Connected");
        socket.on("join room", async data => {
            const { room } = data;
            const db = app.get("db");
            console.log("Room joined", room);
            let existingRoom = await db.sessions.check_room({ id: room });
            !existingRoom.length ? db.sessions.create_room({ id: room }) : null;
            let messages = await db.sessions.fetch_message_history({ id: room });
            socket.join(room);
            io.to(room).emit("room joined", messages);
          });
        
          socket.on("message sent", async data => {
            const { room, message } = data;
            const db = app.get("db");
            await db.sessions.create_message({ id: room, message });
            let messages = await db.sessions.fetch_message_history({ id: room });
            io.to(data.room).emit("message dispatched", messages);
          });
        
        
        
          socket.on("disconnect", () => {
        
            console.log("User Disconnected");
        
          });
    
    
    
    
    })
