const express = require('express');

const HttpError = require('../models/http-error');
const placesControllers = require('../controllers/places-controllers');
const createApplication = require('express/lib/express');

const router = express.Router();


router.get('/:pid', placesControllers.getPlaceById);
router.get('/user/:uid',placesControllers.getPlaceByUserId);

router.post('/',placesControllers.createPlace);

module.exports = router;