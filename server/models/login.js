module.exports = function(sequelize, DataTypes) {
	return sequelize.define(
		'login',
		{
			user_id: {
				type: DataTypes.STRING(16),
				allowNull: false,
				primaryKey: true
			},
			password: {
				type: DataTypes.STRING(32),
				allowNull: false
			},
			group_group_id: {
				type: DataTypes.STRING(30),
				allowNull: false,
				primaryKey: true,
				references: {
					model: 'groups_table',
					key: 'group_id'
				}
			},
			create_time: {
				type: DataTypes.DATE,
				allowNull: true,
				defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
			}
		},
		{
			tableName: 'login'
		}
	)
}
