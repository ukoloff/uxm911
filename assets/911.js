!function () {
  document.addEventListener("DOMContentLoaded", init, { once: true })

  function init() {
    var f = document.forms[0]
    f.onsubmit = send
    f.querySelector('button').disabled = !f.room.value
  }

  async function send(ev) {
    ev.preventDefault()
    this.querySelector('button').disabled = true
    await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(new FormData(this)))
    })
  }
}()
