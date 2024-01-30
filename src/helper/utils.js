const jwtencode = require('jwt-simple')
const moment = require('moment')
const { jwt } = require('../../config/vars')

exports.generateToken = ({ _id, name, username }) => {
  const payload = {
    iat: moment().unix(),
    _id,
    nickname: name,
    username,
  }
  return jwtencode.encode(payload, jwt.secret)
}
