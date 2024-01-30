const Session = require('../models/session.model')
const Response = require('../helper/response')

exports.authorizationToken = (err, req, res, next) => {
  if (err.status === 401 || err.code === 'invalid_token') {
    req.message = err.message
    return res.status(401).json(Response.message(Response.code.Unauthorized))
  }
  return next(err)
}

exports.tokenExpired = async (req, res, next) => {
  const {
    headers: { authorization },
  } = req
  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    const token = authorization.split(' ')[1]
    const hasSession = await Session.findOne({ token }).select('_id').lean()
    if (!hasSession) {
      return res.status(403).json(Response.message(Response.code.TokenHasExpired))
    }
  }
  return next()
}
