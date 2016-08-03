var nodemailer = require('nodemailer');
var path = require('path');
var smtpTransport = require('nodemailer-smtp-transport');
var dbupdate= require('./askquestion');
exports.sendMail = function handleSayHello(req, res) {
    // Not the movie transporter!
    var mobile = req.body.mobile;
    var query = req.body.query;

    var email = req.body.email;
    console.log(email);
    console.log(mobile);
    console.log(query);
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'yahoo',
        auth: {
            user: 'tanmayawasthi105@yahoo.com', // Your email id
            pass: '#Jun105#' // Your password
        }
    }));
    var text = query ;
    var mailOptions = {
    from: 'tanmayawasthi105@yahoo.com', // sender address
    to: 'tanmayawasthi105@yahoo.com', // list of receivers
    subject: 'Astroguru query', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        // res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        dbupdate.question(email,mobile,query);
       res.sendfile(path.join(__dirname, '../public', 'profile.html'));
    };
});
};