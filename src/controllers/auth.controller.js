const Bcrypt = require('bcrypt')
const Response = require('../helper/response')
const User = require('../models/user.model')
const AuthService = require('../services/auth.service')

exports.regsiter = async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body
    if (password !== confirmPassword) {
      return res.json(Response.message(Response.code.InvalidData))
    }
    const passwordHash = await Bcrypt.hash(password, 10)
    await User({
      username,
      password: passwordHash,
    }).save()
    return res.json(Response.message(Response.code.Success))
  } catch (error) {
    if (error === 11000) {
      return res.json(Response.message(Response.code.DuplicateUser))
    }
    return res.json(Response.message(Response.code.ServiceNotAvailable))
  }
}

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await AuthService.getUserDataAndToken({ username, password })
    return res.json(Response.message(user.code, { token: user.token }))
  } catch (error) {
    console.log(error)
    return res.json(Response.message(Response.code.ServiceNotAvailable))
  }
}
