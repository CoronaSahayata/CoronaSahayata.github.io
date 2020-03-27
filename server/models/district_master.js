/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('district_master', {
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    district_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state_state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'state_master',
        key: 'state_id'
      }
    }
  }, {
    tableName: 'district_master'
  });
};
