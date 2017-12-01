const express = require('express');
const router = express.Router();
const sqlite = require('sqlite3');
const mailgun = require('../mailgun/mailgun')
 
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
    });
});

// Send Mail
router.post('/mail', (req, res, next) => {
    var feedback = req.body.params.feedback
    var data = {
        from: feedback.email,
        to: 'fahadhayat@outlook.com',
        subject: 'This is a Feedback from '+feedback.firstName+' '+feedback.lastName,
        text: feedback.message
    };

    mailgun.messages().send(data, function (error, body) {
        if (error) {
            response.data = false;
            response.status = 400;
            response.message = error.message;
            return console.log(error.message);
            sendError(error, res);
        } else {
            response.data = true;
            response.status = 200;
            response.message = "Thank you for your Feedback!"
        }
        
        res.json(response);  
    });
});

// Get Rooms for a building
router.get('/rooms', (req, res, next) => {
    var buildingID = req.query.buildingID;

    db.all("SELECT ID, Number FROM Rooms WHERE BuildingID =" + buildingID +" ORDER BY Number ASC", function(err, rooms) { 
        if (err) {
            return console.log(err.message);
            sendError(err, res);
        }
        response.data = rooms;
        res.json(response);        
    });
});

// Get Courses for a specific room
router.get('/courses', (req, res, next) => {
    var roomID = req.query.roomID;

    db.all("SELECT * FROM Courses WHERE RoomID =" + roomID +" ORDER BY ID ASC", function(err, courses) { 
        if (err) {
            return console.log(err.message);
            sendError(err, res);
        }
        response.data = courses;
        res.json(response);        
    });
});

module.exports = router;