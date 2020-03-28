const express = require('express')

const app = express.Router()

app.use('/volunteer', require(__dirname+'/./volunteer'))

module.exports = app
