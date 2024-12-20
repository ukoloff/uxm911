module.exports = post

async function post(req, res) {
  try {
    var data = await serve(req)
  } catch (e) {
    data = {
      error: e.name,
      message: e.message
    }
  }
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}

async function serve(req) {
  var data = ''
  for await (const chunk of req) {
    data += chunk
  }
  return JSON.parse(data)
}
