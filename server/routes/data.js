const express = require('express')
const app = express.Router()

const getCountryData = async country => {
	return {
		country_code: country.get('country_code'),
		country_name: country.get('country_name'),
		latitude: country.get('latitude'),
		longitude: country.get('longitude')
	}
}

const Country = require(__dirname + '/../models').Countries
const States = require(__dirname + '/../models').States

app.get('/country', async (req, res) => {
	try {
		if (req.body['country_code']) {
			const country = await Country.findOne({
				where: { country_code: req.body['country_code'].toUpperCase() }
			})
			data = await getCountryData(country)
			res.json({
				status: 200,
				data: data
			})
			return
		}
		if (req.body['country']) {
			const country = await Country.findOne({
				where: { country_name: req.body['country'] }
			})
			data = await getCountryData(country)
			res.json({
				status: 200,
				data: data
			})
			return
		} else {
			res.json({ status: 400, error: true, data: 'CountryNameMissing' })
		}
	} catch (err) {
		console.log(err)
	}
})

app.get('/countries', async (req, res) => {
	try {
		const data = await Country.findAll()
		res.json({ status: 200, error: false, data: data })
	} catch (err) {
		console.log(err)
	}
})

app.get('/states', async (req, res) => {
	try {
		if (req.body['country_code']) {
			const state = await States.findAll({
				where: {
					country_country_id: req.body['country_code'].toUpperCase()
				}
			})
			data = state
			res.json({
				status: 200,
				data: data
			})
			return
		}
	} catch (err) {
		res.json({ status: 500, error: true, data: err })
		console.log(err)
	}
})

module.exports = app
