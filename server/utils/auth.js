const jwt = require("jsonwebtoken")

const secret = process.env.JWT_SECRET

const options = {
	expiresIn: "2d",
	issuer: "https://coronasahayata.github.io"
}

const createToken = payload => {
	const token = jwt.sign(payload, secret, options)
	return token
}

const validateToken = token => {
	const result = jwt.verify(token, secret, options)
	return result
}

module.exports = { createToken, validateToken }
