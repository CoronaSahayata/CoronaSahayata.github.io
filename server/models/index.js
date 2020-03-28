const Sequelize = require('sequelize')

const sequelize = new Sequelize(
	process.env.MYSQL_DB || 'csdb',
	process.env.MYSQL_USER || 'root',
	process.env.MYSQL_PASSWORD || 'password',
	{
		dialect: 'mysql'
	}
)

const Cities = require(__dirname + '/./city_master')(sequelize, Sequelize)
const Countries = require(__dirname + '/./country_master')(sequelize, Sequelize)
const Districts = require(__dirname + '/./district_master')(
	sequelize,
	Sequelize
)
const States = require(__dirname + '/./state_master')(sequelize, Sequelize)
const GroupsTable = require(__dirname + '/./groups_table')(sequelize, Sequelize)
const Login = require(__dirname + '/./login')(sequelize, Sequelize)
const UserInfo = require(__dirname + '/./user_info')(sequelize, Sequelize)

UserInfo.belongsTo(Login, { foreignKey: 'login_user_id' })
UserInfo.hasOne(Districts, { foreignKey: 'district_master_district_id' })
Districts.belongsTo(States, { foreignKey: 'state_state_id' })
States.belongsTo(Countries, { foreignKey: 'country_country_id' })

module.exports = {
	Cities,
	Countries,
	Districts,
	States,
	GroupsTable,
	Login,
	UserInfo,
	sequelize
}
