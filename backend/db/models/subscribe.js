'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscribe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'Userid' });
      this.belongsTo(models.Event, { foreignKey: 'Eventid' });
    }
  };
  Subscribe.init({
    Userid: DataTypes.INTEGER,
    Eventid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subscribe',
  });
  return Subscribe;
};
