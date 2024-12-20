module.exports = route
const assets = require('./view/assets')
const post = require('./view/post')
const hello = require('./view/hello')

async function route(req, res) {
  if (req.method == 'POST')
    return post(req, res)

  if (/^\/assets\/.*/.test(req.url))
    return assets(req, res)

  hello(req, res)
}
