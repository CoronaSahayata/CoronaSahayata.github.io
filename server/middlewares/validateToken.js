const auth = require(__dirname + '/../utils/auth')

const validateToken = (req, res, next) => {
	let user_id = req.body['username']
	if (!user_id) {
		res.json({ status: 400, error: true, data: 'UsernameEmpty' })
		return
	}
	const authorizationHeader = req.headers.authorization
	let result
	if (authorizationHeader) {
		const token = req.headers.authorization.split(' ')[1] // Bearer <token>

		try {
			result = auth.validateToken(token,req.body['username'])
			req.decoded = result
			next()
		} catch (err) {
			throw new Error(err)
		}
	} else {
		result = {
			error: `Authentication error. Token required.`,
			status: 401
		}
		res.status(401).send(result)
	}
}

module.exports = validateToken
