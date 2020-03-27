/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city_master', {
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    city_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    district_district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'district_master',
        key: 'district_id'
      }
    }
  }, {
    tableName: 'city_master'
  });
};
