const Bcrypt = require('bcrypt')
const Response = require('../helper/response')
const User = require('../models/user.model')
const Utils = require('../helper/utils')
const Session = require('../models/session.model')

exports.getUserDataAndToken = async ({ username, password }) => {
  const user = await User.findOne({ username }).select('password name').lean()
  if (!user) return { code: Response.code.InvalidData }
  const isSamePassword = await Bcrypt.compare(password, user.password)
  if (password && !isSamePassword) {
    return { code: Response.code.InvalidData }
  }
  const token = Utils.generateToken({
    _id: user._id,
    name: user.name,
    username,
  })
  try {
    await Session({ username, token }).save()
  } catch (e) {
    await Session.updateOne({ username }, { token })
  }
  return {
    code: Response.code.Success,
    token,
  }
}
