const express = require('express')

const app = express.Router()

app.use('/volunteer', require(__dirname + '/./volunteer'))
app.use('/', require(__dirname + '/./data'))

module.exports = app
