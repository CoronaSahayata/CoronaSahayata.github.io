/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country_master', {
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'country_master'
  });
};
