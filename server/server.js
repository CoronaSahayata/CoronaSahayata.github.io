const Sequelize = require('sequelize')

const sequelize = new Sequelize('csdb', 'root', 'password', {
	dialect: 'mysql'
})

const run = async () => {
	try {
		const s = await sequelize.authenticate()
	} catch (error) {
		console.log(error)
	}
}

run()
