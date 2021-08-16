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
      this.hasMany(models.Subscribe, {foreignKey: 'id'})
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    City: DataTypes.STRING,
    Name: DataTypes.STRING,
    Userphoto: DataTypes.STRING,
    Userphonenumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
