const http = require('node:http')
const hello = require('../view/hello')

http.createServer(hello)
  .listen(process.env.PRT || 6789, 'localhost')
