process.env.NODE_ENV = 'development'

const path = require('path')
const express = require('express')
const mockjs = require('express-mockjs')
const http = require('http')

const port = 8090
const app = express()
const server = http.createServer(app)

app.use('/api', mockjs(path.join(__dirname, 'mocks')))

server.listen(port)
server.on('listening', () => {
  console.log(`Listening on http://localhost:${port}/api`)
})
