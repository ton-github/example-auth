const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  username: { type: String, unique: true, require: true },
  password: { type: String, select: false },
  name: { type: String },
})

const User = mongoose.model('user', schema)
module.exports = User
