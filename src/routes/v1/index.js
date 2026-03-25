const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require("../../controllers/flight-controller")
const AirportController = require("../../controllers/airport-controller");
const router = express.Router();
const {FlightMiddlewares} = require('../../middlewares/index');


router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll)


router.post('/flights',FlightMiddlewares.validateCreateFlight,FlightController.createFlight);
router.get('/flights',FlightController.getAllFlights);
router.get('/flights/:id',FlightController.getFlight);
router.patch('/flights/:id',FlightController.updateFlight);

router.post('/airports',AirportController.create)

module.exports = router
