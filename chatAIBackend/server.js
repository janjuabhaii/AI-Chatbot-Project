const express = require("express");
const app = express();


const {
    loginAdmin, 
    getBookings,
    changeBookingStatus,
    changPassword,
    getSettings,
    changeSettings
} = require('./controllers/adminController');

const {bookTimeslot, bookedTimeslot} = require('./controllers/userController');

app.use(express.json())

app.post("/api/login", async (req, res)=>{
    return loginAdmin(req, res);
});    

app.get("/api/booked-timeslots", async(req, res)=>{
    return bookedTimeslot(req, res);
});

app.post("/api/book-timeslot", async (req, res)=>{
    return bookTimeslot(req, res);
});

app.get("/api/bookings", async(req, res)=>{
    return getBookings(req, res);
})

app.post('/api/booking-status', async (req, res) => {
   return changeBookingStatus(req, res);
})


app.post('/api/change-password', async (req, res) => {
    return changPassword(req, res);
});


app.get("/api/get-settings", async(req, res)=>{
   return getSettings(req, res);
});

app.post('/api/change-settings', async (req, res) => {
    return changeSettings(req, res);
});



app.listen(5050, () => console.log("Server started on port 5050"));