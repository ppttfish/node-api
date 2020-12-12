const http = require('http')
const serverHandle = require('./app')
const port = process.env.PORT || 5000

const server = http.createServer(serverHandle)

server.listen(port, function(){
  console.log(`listening on port ${port}`)
})
