
// router.post('/', (req, res) => {
//     console.log('entro');
//     const {name, email, phone, booking_date, experience_id} = req.body;
//     // const {nombre, edad} = persona;
//     res.send(`Post -> nombre: ${name} email: ${email}, id_ex: ${experience_id}`);
// });

const BookingModel = require("../models/bookingModel");

const send = async (req, res) => {
    // const { body } = req.body;
    try {
        const response = await sendBooking(req.body);
        res.json(response);
    } catch (error) {
        res.send(error).status(404);
    }
}

const sendBooking = async (body) => {
    try {
        const booking = new  BookingModel({name: body.name, email: body.email_address, phone: body.phone, booking_date: body.date, experience_id: body.id});
        const resBooking = await booking.save();
        if (!resBooking) throw { status: 404, msg: 'Booking send failure' };
        console.log('aja: ', resBooking);
        return { resBooking };
    } catch (error) {
        throw { status: 500, msg: error };
    }
}

module.exports = {
    send
}