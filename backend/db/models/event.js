'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Subscribe, {foreignKey: 'id'})
    }
  };
  Event.init({
    Name: DataTypes.STRING,
    Url: DataTypes.STRING,
    Picture: DataTypes.STRING,
    Startseselldate: DataTypes.DATE,
    Startdatetime: DataTypes.DATE,
    Category: DataTypes.STRING,
    Genre: DataTypes.STRING,
    City: DataTypes.STRING,
    Countrycode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
