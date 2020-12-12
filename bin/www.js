const http = require('http')
const serverHandle = require('../app')
const port = 8001

const server = http.createServer(serverHandle)

server.listen(port)
