const {FlightService}= require("../services/index");

const flightService = new FlightService();


const createFlight = async(req,res) =>{
    try{
          const flight = await flightService.createFlight(req.body);
          return res.status(201).json({
            data:flight,
            error:{},
            success:true,
            message:"Successfully created a flight"
          })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a flight",
            err:error
        })

    }
}

    const getAllFlights = async(req,res) =>{
    try{
          const flights = await flightService.getAllFlightData(req.query);
          return res.status(200).json({
            data:flights,
            error:{},
            success:true,
            message:"Successfully get all flights"
          })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get all flights",
            err:error
        })

    }
}

module.exports = {
    createFlight,getAllFlights
}
