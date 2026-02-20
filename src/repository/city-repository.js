const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });

      return true;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      //   const city = await City.findOne({
      //     where:{
      //         id:cityId
      //     }
      //   })

      //or

      const city = await City.findByPk(cityId);

      return city;
    } catch (error) {
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
        //returning:true,
        //plain:true  // this returning and plain both are used for returning the row else it will return data:[1],this only works in postgres and not in mysql,for mysql u have to get the data and update and then save like this
        /*
        const city = await City.findByPk(cityId);
        city.name=data.name;
        await city.save();
        return city;
        */
      });

      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getAllCities () {
    try{
      const cities = await City.findAll();
      return cities;

    }catch(error){
      throw { error };
    }
  }
}

module.exports = CityRepository;
