const {Booking, Admin, Setting} = require('../models');

const loginAdmin = async (req, res) => {
    const {email, password} = req.body;
    try{
        const admin = await Admin.findOne({where: {email: email}});
        if(!admin){
            return res.json({"status": "failed", "message": "Admin not found"});
        }
        if(admin.password !== password){
            return res.json({"status": "failed", "message": "Wrong password"});
        }
        return res.json({"status": "success", "admin": {id: admin.id, name: admin.name, email: admin.email}});
    }
    catch(error){
        return res.json({"status": "failed", "message": error.message});
    }
};

const getBookings = async (req, res) => {
    // get all booking ordered by date desc
    try{
        const bookings = await Booking.findAll({
            order: [['bookingDate', 'ASC']],
        });

        return res.json({"status": "failed", "bookings": bookings});
    }
    catch(error){
        return res.json({"status": "failed", "message": error.message});
    }
};

const changeBookingStatus = async (req, res) => {
    const {id, status} = req.body;
    try {
        await Booking.update({status: status}, {where: {id: id}});
        return res.json({"status": "success", "message": "Booking status updated successfully"});
    } catch (error) {
        return res.json({"status": "failed", "message": error.message});
    }
};

const changPassword = async (req, res) => {
    const {email, current_password, new_password} = req.body;
    try {
        const admin = await Admin.findOne({where: {email: email}});
        if(!admin){
            return res.json({"status": "failed", "message": "Admin not found"});
        }
        if(admin.password !== current_password){
            return res.json({"status": "failed", "message": "Wrong password"});
        }
        await Admin.update({password: new_password}, {where: {email: email}});
        return res.json({"status": "success", "message": "Password changed successfully"});
    }
    catch(error){
        return res.json({"status": "failed", "message": error.message});
    }
};

const getSettings = async (req, res) => {
    try{
        const settings = await Setting.findOne();
        return res.json({"status": "success", "settings": settings});
    }
    catch(error){
        return res.json({"status": "failed", "message": error.message});
    }
};

const changeSettings = async (req, res) => {
    const {timeslot_length, start_time, end_time} = req.body;
    try {
        
        let settings = await Setting.findOne();
        if(!settings){
            settings = await Setting.create({timeslot_length, start_time, end_time});
        }
        else{
            await Setting.update({timeslot_length, start_time, end_time}, {where: {id: settings.id}});
        }
        return res.json({"status": "success", "message": "Config changed successfully"});
    } catch (error) {
        return res.json({"status": "failed", "message": error.message});
    }
}




module.exports = {
    loginAdmin,
    getBookings,
    changeBookingStatus,
    changPassword,
    getSettings,
    changeSettings
}