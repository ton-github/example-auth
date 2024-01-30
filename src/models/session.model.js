const mongoose = require('mongoose')

const { Schema } = mongoose
const schema = new Schema({
  username: { type: String, unique: true, require: true },
  token: { type: String, unique: true, require: true },
})

const Session = mongoose.model('Session', schema)
module.exports = Session
