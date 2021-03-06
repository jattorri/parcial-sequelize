'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Order);
      User.belongsTo(models.Adress);
    }
  };
  User.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    adressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};