module.exports = hello

async function hello(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('<link href="/assets/bootswatch/spacelab/bootstrap.min.css" rel="stylesheet">Hello, world!')
}
