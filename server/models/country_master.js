/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country_master', {
    country_code: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    country_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    latitude: {
      type: "DOUBLE",
      allowNull: true
    },
    longitude: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'country_master'
  });
};
