const http = require('http')
const serverHandle = require('../app')
const port = process.env.PORT || config.port

const server = http.createServer(serverHandle)

server.listen(port, function(){
  console.log(`${pkg.name} listening on port ${port}`)
})
