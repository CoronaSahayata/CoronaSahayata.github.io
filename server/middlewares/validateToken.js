const auth = require(__dirname+"/../utils/auth")

const validateToken = (req, res, next) => {
	const authorizationHeader = req.headers.authorization
	let result
	if (authorizationHeader) {
		const token = req.headers.authorization.split(" ")[1] // Bearer <token>

		try {
			result = auth.validateToken(token)
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
