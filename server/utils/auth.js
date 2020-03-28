const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET || 'okaish'

const options = {
	expiresIn: 24*60*60
}

const createToken = payload => {
	const token = jwt.sign(payload, secret, options)
	return token
}

const validateToken = token => {
	const result = jwt.verify(token, secret, options)
	return result
}

;(async () => {
	const data = await createToken({password:'password'})
	console.log(data);
})()

module.exports = { createToken, validateToken }
