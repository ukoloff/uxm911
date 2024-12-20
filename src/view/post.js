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
  var input = JSON.parse(data)
  var html = 'Обращение в техподдержку'
  for (var [k, v] of Object.entries(items)) {
    html += `<br>${v}: <i>${h(input[k]).trim() || '-'}</i>`
  }
  var f = await fetch(`https://api.telegram.org/bot${process.env.TOKEN}}/sendMessage`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parse_mode: 'HTML',
      text: html,
      chat_id: Number(process.env.TGR),
    })
  })

  var r = await f.json()
  return r
}
