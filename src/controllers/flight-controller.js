const {FlightService}= require("../services/index");
const {SuccessCodes,ServerErrorCodes} = require('../utils/error-codes')

const flightService = new FlightService();


const createFlight = async(req,res) =>{
    try{
        let flightRequestData={
            flightNumber : req.body.flightNumber,
            airplaneId :req.body.airplaneId,
            arrivalAirportId:req.body.arrivalAirportId,
            departureAirportId:req.body.departureAirportId,
            arrivalTime:req.body.arrivalTime,
            depatureTime:req.body.depatureTime,
            price:req.body.price
          }   
          const flight = await flightService.createFlight(flightRequestData);
          return res.status(SuccessCodes.CREATED).json({
            data:flight,
            error:{},
            success:true,
            message:"Successfully created a flight"
          })
    }catch(error){
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
          return res.status(SuccessCodes.OK).json({
            data:flights,
            error:{},
            success:true,
            message:"Successfully get all flights"
          })
    }catch(error){
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
