/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_info', {
    login_user_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'login',
        key: 'user_id'
      }
    },
    first_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    email_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    landmark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    city_master_city_id: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'city_master',
        key: 'city_id'
      }
    },
    district_master_district_id: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'district_master',
        key: 'district_id'
      }
    }
  }, {
    tableName: 'user_info',
    timestamps:false
  });
};
