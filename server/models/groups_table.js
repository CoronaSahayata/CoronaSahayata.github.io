/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groups_table', {
    group_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    group_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'groups_table',
    timestamps:false
  });
};
