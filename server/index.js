// External Requirements
const express = require('express')
const cors = require('cors')

try {
	if (!process.env.NODE_ENV) {
		throw 'No environment specified.'
	}
	require('dotenv').config({
		path: __dirname + `/${process.env.NODE_ENV}.env`
	})
} catch (error) {
	console.error('Environment Variable missing.\nDefaulting to development.\n')
	require('dotenv').config({
		path: __dirname + `/development.env`
	})
}

// MySQL Server
require(__dirname + '/models')

// React development server runs on port 3000
// We wil stick to 8080 port for express server
const port = process.env.PORT
const https_port = process.env.HTTPS_PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// https redirect in production and build
app.enable('trust proxy')
if (process.env.NODE_ENV != 'dev') {
	app.use(require(__dirname + '/middlewares/httpsRedirect.js'))
}

app.use('/api', require(__dirname + '/routes/api'))

app.use('/', express.static('tests'))

app.listen(port, () => console.log(`Listening on port ${port}`))

// ! Only use in deployment
const https = require('https')
const fs = require('fs')
const options = {
	key: fs.readFileSync(__dirname + '/./server.key'),
	cert: fs.readFileSync(__dirname + '/./server.crt')
}
// ? https
// ? 	.createServer(options, app)
// ? 	.listen(https_port, () =>
// ? 		console.log(`Https listening on port ${https_port}`)
// ? 	)
