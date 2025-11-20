import express from "express";
import Booking from "../models/Booking.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const { email } = req.query;
  const bookings = await Booking.find(email ? { userEmail: email } : {});
  res.send(bookings);
});

router.post("/", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.send(booking);
});

export default router;