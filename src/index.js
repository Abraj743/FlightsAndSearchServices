const express = require("express");
const bodyParser = require("body-parser");

const {PORT, SYNC_DB} = require('./config/serverConfig')
const ApiRoutes = require('./routes/index')
const db = require('./models/index');
const {City,Airport} = require('./models/index')

const setupAndStartServer = async () =>{
     const app = express();

     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));
     app.use('/api',ApiRoutes);
     
     app.listen(PORT, async()=>{
        console.log(`Server started running at ${PORT}`)
      console.log(SYNC_DB);
      if(SYNC_DB){
             db.sequelize.sync({alter:true});
      }
     
      // const city = await City.findOne({
      //    where:{
      //       id:8
      //    }
      // });

      // const airports = await city.getAirports();
      // console.log(airports);
     })

}


setupAndStartServer();
