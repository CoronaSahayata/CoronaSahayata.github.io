const Sequelize = require('sequelize')

const sequelize = new Sequelize('csdb', 'root', 'password', {
	dialect: 'mysql'
})

const CityMaster = require(__dirname + '/./city_master')(sequelize, Sequelize)
const CountryMaster = require(__dirname + '/./country_master')(
	sequelize,
	Sequelize
)
const DistrictMaster = require(__dirname + '/./district_master')(
	sequelize,
	Sequelize
)
const StateMaster = require(__dirname + '/./state_master')(sequelize, Sequelize)
const GroupsTable = require(__dirname + '/./groups_table')(sequelize, Sequelize)
const Login = require(__dirname + '/./login')(sequelize, Sequelize)
const UserInfo = require(__dirname + '/./user_info')(sequelize, Sequelize)

sequelize.authenticate()

module.exports = {
	CityMaster,
	CountryMaster,
	DistrictMaster,
	StateMaster,
	GroupsTable,
	Login,
	UserInfo
}
