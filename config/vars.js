const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ env: path.join(__dirname, '../../.env') })

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  mongo: {
    url: process.env.MONGODB_URL,
  },
}
