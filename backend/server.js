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
const authRouter = require('./lib/auth.router')
const passportInit = require('./lib/passport.init')
const { SESSION_SECRET, CLIENT_ORIGIN } = require('./config')
const db = require('./data_access/init_database')
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
    origin: CLIENT_ORIGIN
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
app.use('/', authRouter)

//use this comment if any synchronization needed
// if new table(s) will be added use db.init_db(false)
// if there are changes on already exsisting table, use db.init_db(true)
// Be careful !! while using db.init_db(true) because it will remove all contents from tha all tables

db.init_db(false)
// db.init_db(true)

server.listen(process.env.PORT || 8080, () => {
    console.log('listening...')
})