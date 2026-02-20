'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Airport,{
        foreignKey:'cityId'
      })
    }
  }
  City.init({
    //or we can constraint directly here also instead of in migration files like this
    // name: DataTypes.STRING
    name:{type:DataTypes.STRING,allowNull:false,unique:true}
    // what ever constraint we put here are not applied to database,it is applicable to the js code level
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};