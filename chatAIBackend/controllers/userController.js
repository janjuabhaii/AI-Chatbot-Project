const Mailjet = require('node-mailjet');
const {Booking} = require('../models');
const {getEmailHtml} = require('../email-template');
const config = require('../config/config.json');

  const mailjet = Mailjet.apiConnect(
    config.mail_config.MJ_APIKEY_PUBLIC,
    config.mail_config.MJ_APIKEY_PRIVATE
);

const bookTimeslot = async (req, res) => {
    try{
        const {fullName, email, phoneNumber, country, industry, bookingDate, timeslot} = req.body;
        
        const booking = await Booking.create({fullName, email, bookingDate, timeslot, phoneNumber, country, industry});
        sendMJEmail(booking);
        
        return res.json({"status": "success", "booking": booking, "message": "Timeslot booked successfully"});
    }
    catch(error){
        return res.json({"status": "failed", "message": error.message});
    }
};

const bookedTimeslot = async (req, res) => {
    try{
        let bookingDate = req.query.bookingDate;
        const bookings = await Booking.findAll({
            where: {bookingDate: bookingDate},
            attributes: ['timeslot']
        });
        let bookedSlots = [];
        bookings.forEach(booking => {
            bookedSlots.push(booking.timeslot);
        })
        return res.json({bookedSlots});
    }
    catch(error){
        return res.json({"status": "failed", "message": error.message});
    }
};


function sendMJEmail(booking) {

        //send email to user
        var userEmailHtml = getEmailHtml(booking, 'Your booking for a demo has been confirmed on <b>' + booking.bookingDate + '</b> at <b>' + booking.timeslot + '</b>.');
        const user_data = {
            to: booking.email,
            name: booking.fullName,
            subject: "Your booking has been confirmed",
            text: "Your booking for a demo has been confirmed on " + booking.bookingDate + " at " + booking.timeslot+".",
            html: userEmailHtml
        }

       sendMail(user_data);

       //send email to admin
       var adminEmailHtml = getEmailHtml(booking, 'A new booking has been made for <b>' + booking.fullName + '</b> on <b>' + booking.bookingDate + '</b> at <b>' + booking.timeslot + '</b>.');
       const admin_data = {
           to: config.mail_config.ADMIN_EMAIL,
           name: "Broliss Admin",
           subject: "A new booking has been made",
           text: "A new booking has been made for " + booking.fullName + " on " + booking.bookingDate + " at " + booking.timeslot+".",
           html: adminEmailHtml
       }

       sendMail(admin_data);
    }

    function sendMail(data) {
        
        try{
        mailjet
        .post('send', {
            host: 'api.mailjet.com',
            version: 'v3.1',
            output: 'text',
        })
        .request({
          Messages: [
            {
              From: {
                Email: config.mail_config.SENDER_EMAIL,
                Name: config.mail_config.SENDER_NAME
              },
              To: [
                {
                  Email: data.to,
                  Name: data.name
                }
              ],
              Subject: data.subject,
              TextPart: data.text,
              HTMLPart: data.html
            }
          ]
        }).then((result) => {
          console.log(result.body);
        })
        .catch((err) => {
          console.log(err.statusCode, err.statusText);
        })
        }
        catch(error){
            console.log("Exception: ", error.message);
        }
    }

module.exports = {
    bookTimeslot,
    bookedTimeslot
}