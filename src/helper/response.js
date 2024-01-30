const codeStatus = {
  Success: 0,
  BadRequest: 400,
  Unauthorized: 401,
  TokenHasExpired: 402,
  Forbidden: 403,
  HostNotFound: 404,
  DuplicateData: 800,
  DuplicateUser: 803,
  InvalidData: 997,
  ServiceNotAvailable: 999,
}

const status = (code) => {
  let res
  switch (code) {
    case 0:
      res = { code, message: 'Success' }
      break
    case 400:
      res = { code, message: 'Bad request' }
      break
    case 401:
      res = { code, message: 'Unauthorized' }
      break
    case 402:
      res = { code, message: 'Token has expired' }
      break
    case 403:
      res = { code, message: 'Forbidden' }
      break
    case 404:
      res = { code, message: 'Host not found' }
      break
    case 800:
      res = { code, message: 'Duplicate data' }
      break
    case 803:
      res = { code, message: 'User have already in system' }
      break
    case 997:
      res = { code, message: 'Invalid Request Data' }
      break
    case 999:
      res = { code, message: 'Service Not Available' }
      break
    default:
      break
  }
  return res
}

const responseMsg = (code, data = {}) => ({
  status: status(code),
  data,
})

module.exports = {
  message: responseMsg,
  code: codeStatus,
}
