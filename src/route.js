module.exports = route
const hello = require('./view/hello')

async function route(req, res) {
  hello(req, res)
}
