!function () {
  document.addEventListener("DOMContentLoaded", init, { once: true })

  function init() {
    var f = document.forms[0]
    f.onsubmit = send
    f.querySelector('button').disabled = !f.room.value
  }

  function status() {
    var f = document.forms[0]
    return [f.querySelector('button+i'), f.querySelector('button+i+span')]
  }

  async function send(ev) {
    ev.preventDefault()
    var [icon, txt] = status()
    icon.className = "fa fa-refresh fa-spin fa-lg fa-fw text-info"
    txt.innerHTML = 'Отправка сообщения...'
    this.querySelector('button').disabled = true
    var h = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(new FormData(this)))
    })
    var res = await h.json()
    if (res.ok) {
      icon.className = "fa fa-check fa-lg fa-fw text-success"
      txt.innerHTML = 'Сообщение отправлено в техподдержку'
    } else {
      icon.className = "fa fa-exclamation-triangle fa-lg fa-fw text-danger"
      txt.innerHTML = 'Не удалось отправить сообщение'
    }
  }
}()
