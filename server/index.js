const express = require("express")
const cors = require("cors")
const logger = require("morgan")

require("dotenv").config()

const port = process.env.PORT || 3000

const app = express()

if (process.env.NODE_ENV === "dev") {
	app.use(logger("dev"))
}

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Listening on port ${port}`))
