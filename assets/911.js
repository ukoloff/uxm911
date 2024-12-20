!function () {
  document.addEventListener("DOMContentLoaded", init, { once: true })

  function init() {
    var f = document.forms[0]
    f.querySelector('button').disabled = !f.room.value
  }
}()
