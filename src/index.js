const app = require('../config/express')
const { port } = require('../config/vars')

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

module.exports = app
