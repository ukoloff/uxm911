const h = require('./h')

module.exports = post

const items = {
  room: 'Комната',
  notes: 'Описание проблемы',
  contact: 'Контакт',
}

async function post(req, res) {
  try {
    var data = await serve(req)
  } catch (e) {
    data = dumpErr(e)
  }
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}

function dumpErr(err, level = 0) {
  if (!err || level > 3)
    return
  return {
    error: err.name,
    message: err.message,
    stack: err.stack || null,
    cause: dumpErr(err.cause, level + 1)
  }
}

async function serve(req) {
  var data = ''
  for await (const chunk of req) {
    data += chunk
  }
  var input = JSON.parse(data)
  var html = 'Обращение в техподдержку'
  for (var [k, v] of Object.entries(items)) {
    html += `\n${v}: <i>${h(input[k]).trim() || '-'}</i>`
  }
  var f = await fetch(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parse_mode: 'html',
      text: html,
      chat_id: Number(process.env.TGR),
    })
  })

  var r = await f.json()
  return r
}
