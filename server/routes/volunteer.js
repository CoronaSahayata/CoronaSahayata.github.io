const express = require('express')
const Login = require(__dirname + '/../models').Login

const app = express.Router()
const bcrypt = require('bcrypt')

app.post('/signup', async (req, res) => {
	try {
		let user_id = req.body['username']
		if (user_id === '') {
			res.json({ status: 400, error: false, data: 'UsernameEmpty' })
			return
		}
		const data = await Login.findOne({
			where: { user_id: user_id }
		})

		if (data === null) {
			let password = req.body['password']
			if (password === '') {
				res.json({ status: 400, error: false, data: 'PasswordEmpty' })
				return
			}

			const salt = await bcrypt.genSaltSync(
				parseInt(process.env.SALT_ROUNDS)
			)
			password = bcrypt.hashSync(password, salt)

			const data = await Login.create({
				user_id: user_id,
				password: password,
				group_group_id: 'vo'
			})
			if (data.get('user_id') == user_id)
				res.json({ status: 200, error: false })
			else
				res.json({
					status: 500,
					error: false,
					data: 'InternalServerError'
				})
			return
		} else {
			res.json({ status: 403, error: false, data: 'UsernameExists' })
			return
		}
	} catch (error) {
		res.json({
			status: 500,
			error: err
		})
		console.log(error)
	}
})

app.post('/login', async (req, res) => {
	try {
		let user_id = req.body['username']
		if (user_id === '') {
			res.json({ status: 400, error: false, data: 'UsernameEmpty' })
			return
		}
		const loginData = await Login.findOne({
			where: { user_id: user_id }
		})
		if (loginData === null) {
			res.json({ status: 417, error: false, data: 'UserDoesNotExists' })
			return
		} else {
			let password = req.body['password']
			if (password === '') {
				res.json({ status: 400, error: false, data: 'PasswordEmpty' })
				return
			}
			const data = await bcrypt.compare(
				password,
				loginData.get('password')
			)
			if (data === true) {
				res.json({ status: 200, error: false })
			} else {
				res.json({
					status: 403,
					error: false,
					data: 'WrongUsernameOrPassword'
				})
			}
			return
		}
	} catch (err) {
		res.json({
			status: 500,
			error: err
		})
		console.log(err)
	}
})

module.exports = app
