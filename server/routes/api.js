const express = require('express');
const router = express.Router();
const sqlite = require('sqlite3');

// Connect
let db = new sqlite.Database('CarletonU', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the CarletonU SQLite Database');
});

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get Buildings
router.get('/buildings', (req, res, next) => {
    db.all("SELECT ID, Name FROM Buildings", function(err, buildings) { 
        if (err) {
            return console.log(err.message);
            sendError(err, res);
        }
        response.data = buildings;
        res.json(response);        
        console.log("Queried Buildings from Database");
    });
});

// Get Rooms for a building
router.get('/rooms', (req, res, next) => {
    var buildingID = req.query.buildingID;
    console.log(buildingID);  
    db.all("SELECT ID, Number FROM ClassRooms WHERE BuildingID =" + buildingID, function(err, rooms) { 
        if (err) {
            return console.log(err.message);
            sendError(err, res);
        }
        response.data = rooms;
        res.json(response);        
        console.log("Queried Rooms from Database");
    });
});












module.exports = router;