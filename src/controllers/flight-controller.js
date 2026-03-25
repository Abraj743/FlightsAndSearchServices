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


const getFlight = async (req,res) =>{
    try{
                
         const flight = await flightService.getFlight(req.params.id);
          return res.status(SuccessCodes.OK).json({
            data:flight,
            error:{},
            success:true,
            message:"Successfully fetch the flight data"
          })
    }catch(error){
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to fetch the flight data",
            err:error
        })

    }

}

const updateFlight = async (req,res) =>{
    try {
           const response = await flightService.updateFlight(req.params.id,req.body);
           return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:'Successfully updated the flight'
           })
    } catch (error) {
         return res.status(200).json({
            success:false,
            data:{},
            err:error,
            message:error.message
           })
        
    }
}

module.exports = {
    createFlight,getAllFlights,getFlight,updateFlight
}
