const express = require('express')
const recipesRouter = require('./recipes/recipes-router')

const server = express()

server.use(express.json)

server.use('/api/recipes', recipesRouter)

router.use('*', (req, res) => {
    res.json({ api: 'Working'})
})

module.exports = server