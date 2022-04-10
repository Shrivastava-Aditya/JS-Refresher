// const res = require('express/lib/response');
const uuid = require('uuid/v4');
const HttpError = require('../models/http-error');

const DUMMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description: 'one of the most famous',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        addess: 'NYC',
        creator: 'u1'

    }
]

const getPlaceById = (req,res,next) =>{
    // console.log("Get Request in places");
    const placeId = req.params.pid;
    console.log(placeId);
    const place = DUMMMY_PLACES.find(p => {
        return p.id == placeId;
        });
    console.log(place);
        if(!place){
            throw new HttpError('Could Not Find Place',404);
        }

    res.json({place});
}

const getPlaceByUserId = (req,res,next) => {
    const userid = req.params.uid;
    const place = DUMMMY_PLACES.find( p => {
        return p.creator == userid;
    });
    if(!place){
        throw new HttpError('Could Not Find Place',404);
    }

    res.json({place});

}

const createPlace = (req,res,next) => {
    const {title, description, coordinates, address, creator } = req.body;
    const createdPlace = {
        id: uuid(),
        title,
        description,
        location: coordinates,
        address,
        creator
    };
    /* 
    {
    "title":"New York Stock EXchange",
    "description":"Money",
    "creator":"u2",
    "addresss": "NYC",
    "coordinates":{
        "lat": 40.7063069,
        "lng":-74.010329
        }
    }
    */
    DUMMMY_PLACES.push(createdPlace);

    res.status(201).json({place: createdPlace});
};



exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;