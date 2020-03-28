const jwt = require('jsonwebtoken')

const options = {
	expiresIn: 24*60*60
}

const createToken = (payload,secret) => {
	const token = jwt.sign(payload, secret, options)
	return token
}

const validateToken = (token,secret) => {
	const result = jwt.verify(token, secret, options)
	return result
}


module.exports = { createToken, validateToken }
