/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('state_master', {
    state_id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    state_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country_country_id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'country_master',
        key: 'country_code'
      }
    }
  }, {
    tableName: 'state_master',
    timestamps:false
  });
};
