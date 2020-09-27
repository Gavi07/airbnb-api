const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    booking_date: Date,
    experience_id: String
});

const BookingModel = mongoose.model('booking', BookingSchema);

module.exports = BookingModel;