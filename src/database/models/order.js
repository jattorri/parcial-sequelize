'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.State);
      Order.belongsTo(models.User);
      Order.belongsTo(models.Payment);
      Order.belongsTo(models.Adress,{through:'User'});
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    paymentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    statesId: DataTypes.INTEGER,
    users_adressesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};