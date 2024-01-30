const auth = require('../../config/passport')
const authRoute = require('./auth.route')
const userRoute = require('./user.route')
const { tokenExpired, authorizationToken } = require('../middlewares/auth.middleware')

module.exports = (app) => {
  app.get('/api/health-check', (req, res) => {
    res.status(200).send()
  })

  app.use(tokenExpired)
  app.use('/auth', auth.authenticate.optional, authRoute)
  app.use('/user', auth.authenticate.required, userRoute)

  // Middleware handing
  app.use(authorizationToken)
}
