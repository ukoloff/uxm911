const fs = require('node:fs/promises')
const path = require('node:path')
const h = require('./h')

module.exports = hello

async function hello(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  let src = await fs.readFile(path.join(__dirname, 'index.html'), 'utf-8')
  src = src.replace('${ROOM}', h(decodeURIComponent(req.url).replace(/^\/+/, '')))
  res.end(src)
}
