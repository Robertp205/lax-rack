require('dotenv').config()
const express = require('express'),
        massive = require('massive'),
        cors = require('cors'),
        session = require('express-session'),
        chalk = require('chalk')

const authCTRL = require('./controllers/authController')
const prodCTRL = require('./controllers/productControllers')

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env

const app = express()

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

// GET
app.get('/api/helmet', prodCTRL.getHelmets)
app.get('/api/shoulders', prodCTRL.getShoulders)
app.get('/api/shafts' ,prodCTRL.getShafts)
app.get('/api/heads', prodCTRL.getHeads)
app.get('/api/gloves', prodCTRL.getGloves)
app.get('/api/elbows', prodCTRL.getElbows)

// Post
app.post('api/helmet',prodCTRL)
app.post('api/shoulders', prodCTRL)
app.post('/api/shafts', prodCTRL)
app.post('/api/heads', prodCTRL)
app.post('/api/gloves', prodCTRL)
app.post('/api/elbows' , prodCTRL)
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


massive(CONNECTION_STRING)
    .then(db =>{
        app.set('db', db);
        console.log(chalk.cyan('database is connected'));
        
    })
    .catch(error=> console.log(chalk.red('database connection severed'))
    )

app.listen(SERVER_PORT, ()=> console.log(chalk.cyan("Server is on mLord")
))

