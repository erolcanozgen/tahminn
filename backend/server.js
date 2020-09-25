require('dotenv').config()
const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')
const socketio = require('socket.io')
const passportInit = require('./lib/passport.init')
const { SESSION_SECRET, CLIENT_ORIGIN } = require('./config')
const db = require('./app/models')
const routes = require('./app/routes')
const app = express()
let server

server = http.createServer(app)

// Setup for passport and to accept JSON objects
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())
passportInit()

// Accept requests from our client
app.use(cors({
    origin: CLIENT_ORIGIN,
    credentials: true
}))

// saveUninitialized: true allows us to attach the socket id to the session
// before we have athenticated the user
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_session_secret',
    resave: true,
    saveUninitialized: true
}))

// Connecting sockets to the server and adding them to the request 
// so that we can access them later in the controller
const io = socketio(server)
app.set('io', io)



app.use(express.static(path.join(__dirname, '/../client/build')));
// Direct other requests to the auth router

routes.loginRoutes(app);
routes.predictionRoutes(app);


//use this comment if any synchronization needed
// if new table(s) will be added use db.connection.sync({force: false})
// if there are changes on already exsisting table such as column changes, db.connection.sync({force: true})
// Be careful !! while using db.connection.sync({force: true}) because it will remove all contents from the all tables
db.connection.sync({ force: false })

// require('./app/models/init_db/init_predictions')()

server.listen(process.env.PORT || 8080, () => {
    console.log('listening...')
})
