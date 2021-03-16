const express = require('express')
const path = require('path')

const bakeryRoutes = require('./routes/bakeries')
const userRoutes = require('./routes/users')
const reviewRoutes = require('./routes/reviews')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/bakeries', bakeryRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/reviews', reviewRoutes)
server.use('/api/v1', authRoutes)

module.exports = server
