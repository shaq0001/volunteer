'use strict';

/**
 * Module dependencies.
 */
var sendgrid = require('sendgrid')('iceshaq', 'hargeisa#3'); 

/**
 * Create a Email
 */
exports.create = function(req, res) {
    console.log(req.body);
    var email = new sendgrid.Email({
        to: 'g4884651@trbvm.com',
        from: req.body.email,
        subject: 'Volunteer Sign-up',
        text: req.body.message
    });

    sendgrid.send(email, function(err, json) {
        if (err) {
            return res.status(400).send('Error');
        }
        return res.status(200).send('Success');       
    });

};
