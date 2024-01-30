const Bcrypt = require('bcrypt')
const Response = require('../helper/response')
const User = require('../models/user.model')
const AuthService = require('../services/auth.service')

exports.getUser = async (req, res) => {
  try {
    const { _id } = req.payload
    const user = await User.findOne({ _id }).lean()
    if (!user) {
      return res.json(Response.message(Response.code.InvalidData))
    }
    return res.json(Response.message(Response.code.Success, { user }))
  } catch (error) {
    return res.json(Response.message(Response.code.ServiceNotAvailable))
  }
}
