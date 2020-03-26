// External Requirements
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

try {
	if (!process.env.NODE_ENV) {
		throw "No environment specified."
	}
	require("dotenv").config({
		path: __dirname + `/${process.env.NODE_ENV}.env`
	})
} catch (error) {
	console.error("Environment Variable missing.\nDefaulting to development.\n")
	require("dotenv").config({
		path: __dirname + `/development.env`
	})
}

// React development server runs on port 3000
// We wil stick to 8080 port for express server
const port = process.env.PORT

const app = express()

// Express Configuration
process.env.NODE_ENV === "development"
	? app.use(morgan("dev"))
	: app.use(
			morgan("common", {
				stream: __dirname + "/../morgan.log"
			})
	  )
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Listening on port ${port}`))
