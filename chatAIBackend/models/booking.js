'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      country: DataTypes.STRING,
      industry: DataTypes.STRING,
      bookingDate: DataTypes.DATEONLY,
      timeslot: DataTypes.STRING,
      timezone: DataTypes.STRING,
      status: DataTypes.STRING,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }

  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};