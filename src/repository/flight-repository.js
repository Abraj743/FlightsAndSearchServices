const {Flights} = require('../models/index')
const {Op} = require("sequelize");

class FlightRepository{

    #createFilter(data){  // # tells private fucntion in js
        console.log(data);
        let filter={};

        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }


        // if(data.minPrice && data.maxPrice){
        //    Object.assign(filter,{[Op.and]:[{price:{[Op.gte]:data.minPrice}},{price:{[Op.lte]:data.maxPrice}}]})
        // }

        // if(data.minPrice){
        //     Object.assign(filter,{price:{[Op.gte]:data.minPrice}})

        // }

        //  if(data.maxPrice){
        //     Object.assign(filter,{price:{[Op.lte]:data.maxPrice}})

        // }


       if(data.minPrice){
           filter.price = {...filter.price,[Op.gte]:data.minPrice};
       }

       if(data.maxPrice){
          filter.price = {...filter.price,[Op.lte]:data.maxPrice};
       }

        return filter;

    }
    
    async createFlight(data){
        try{
             const flight = await Flights.create(data);
             return flight;
        }catch(error){
          console.log("Something went wrong in the repository layer")
          throw {error}
        }

    }

    async getFlight(id){
         try{
             const flight = await Flights.findByPk(id);
             return flight;
        }catch(error){
          console.log("Something went wrong in the repository layer")
          throw {error}
        }

    }

    async getAllFlights(filter){
         try{
             const filterObject = this.#createFilter(filter);
             console.log(filterObject);
             const flights = await Flights.findAll({
                where:filterObject
             });
             return flights;
        }catch(error){
          console.log("Something went wrong in the repository layer")
          throw {error}
        }

    }
}

module.exports = FlightRepository;