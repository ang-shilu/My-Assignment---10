import express from "express";
import Booking from "../models/Booking.js";
const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const Bookings = await Booking.find().sort({ createdAt: -1 });
  res.send(Bookings);
});

// Get by ID
router.get("/:id", async (req, res) => {
  const Booking = await Booking.findById(req.params.id);
  res.send(Booking);
});

// Add
router.post("/", async (req, res) => {
  const newBooking = new Booking(req.body);
  await newBooking.save();
  res.send(newBooking);
});

// Update
router.put("/:id", async (req, res) => {
  const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.send({ message: "Booking deleted" });
});

export default router;