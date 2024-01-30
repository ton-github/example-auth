const mongoose = require('mongoose')
const { env, mongo } = require('./vars')

// set mongoose Promise to Bluebird
mongoose.Promise = Promise

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`)
  process.exit(-1)
})

// print mongoose logs in dev env
if (env === 'sit') {
  mongoose.set('debug', false)
}
/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */

exports.connect = () => {
  mongoose.connect(mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose.connection
}
