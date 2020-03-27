/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city_master', {
    city_id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    city_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'city_master'
  });
};
