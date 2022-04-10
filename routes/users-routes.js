const express = require('express');

const router = express.Router();

const DUMMY_USERS = [{
    id : 'u1',
    places_added : 2,
    name : 'Josh',
    why:'wtf'
}]

router.get('/:uid',(req,res,next) => {
    const userId = req.params.uid;
    const user = DUMMY_USERS.find( u=> {
        return u.id = userId;
    })
    res.json({user});
});

module.exports = router;