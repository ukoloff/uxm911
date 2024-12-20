const fs = require('node:fs')
const path = require('node:path')

module.exports = hello

async function hello(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  let src = path.join(__dirname, 'index.html')
  src = fs.createReadStream(src)
  src
    .on('ready', _ => src.pipe(res))
}
