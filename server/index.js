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
app.get('/api/helmets', prodCTRL.getHelmets)




massive(CONNECTION_STRING)
    .then(db =>{
        app.set('db', db);
        console.log(chalk.cyan('database is connected'));
        
    })
    .catch(error=> console.log(chalk.red('database connection severed'))
    )

app.listen(SERVER_PORT, ()=> console.log(chalk.cyan("Server is on mLord")
))

