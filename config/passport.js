const { expressjwt } = require('express-jwt')
const { jwt } = require('./vars')

const getTokenFromHeaders = (req) => {
  const {
    headers: { authorization },
  } = req
  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1]
  }
  return null
}

const authenticate = {
  required: expressjwt({
    secret: jwt.secret,
    requestProperty: 'payload',
    getToken: getTokenFromHeaders,
    algorithms: ['HS256'],
  }),
  optional: expressjwt({
    secret: jwt.secret,
    requestProperty: 'payload',
    getToken: getTokenFromHeaders,
    algorithms: ['HS256'],
    credentialsRequired: false,
  }),
}

module.exports = {
  authenticate,
}
