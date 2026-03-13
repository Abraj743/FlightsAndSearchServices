const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async(req,res) => {
   try{
        const resonse = await airportService.create(req.body);
        return res.status(201).json({
            message:"Successfully created the airport",
            data:resonse,
            err:{},
            success:true
        })
   }catch(error){
    console.log(error);
    return res.status(500).json({
        data:{},
        sucess:false,
        err:error,
        message:"Cannot create a new airport"
    })
   }

}
module.exports = {
    create
}