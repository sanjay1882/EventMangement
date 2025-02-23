const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const QRCode = require("qrcode");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/events", { useNewUrlParser: true, useUnifiedTopology: true });

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    event: String,
    bookingId: String
});

const Booking = mongoose.model("Booking", bookingSchema);

app.post("/book-event", async (req, res) => {
    try {
        const bookingId = "CROWD" + Math.floor(Math.random() * 1000000); 
        const bookingDetails = { ...req.body, bookingId };

       
        const qrCode = await QRCode.toDataURL(`Booking ID: ${bookingId}\nEvent: ${req.body.event}\nName: ${req.body.name}`);

       
        const newBooking = new Booking({ ...bookingDetails, qrCode });
        await newBooking.save();

        res.json({ success: true, bookingId, qrCode });
    } catch (error) {
        res.status(500).json({ success: false, message: "Booking failed", error });
    }
});
app.listen(5000, () => console.log("Server running on port 5000"));
