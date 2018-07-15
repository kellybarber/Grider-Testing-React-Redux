const app = require('express')()
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port) 
console.log("Listening on Port", port)

