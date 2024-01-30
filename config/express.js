const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')
const helmet = require('helmet')
const passport = require('passport')
const routes = require('../src/routes')
const mongoose = require('./mongoose')

/** *
 * Express instance
 * @public
 */
const app = express()

process.env.TZ = 'Asia/Bangkok'

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// secure apps by setting various HTTP headers
app.use(helmet())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// enable authentication
app.use(passport.initialize())
// passport.use('agent', strategies.agent)

// mount api routes
routes(app)

// open mongoose connection
mongoose.connect()

module.exports = app
