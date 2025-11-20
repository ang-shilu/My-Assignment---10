import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  BookingName: String,
  owner: String,
  category: String,
  pricePerDay: Number,
  location: String,
  availability: String,
  description: String,
  coverImage: String,
  userEmail: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", BookingSchema);