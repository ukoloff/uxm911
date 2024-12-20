const http = require('node:http')
const route = require('../route')

http.createServer(route)
  .listen(process.env.PRT || 6789, 'localhost')
