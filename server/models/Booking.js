import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  vehicleId: String,
  vehicleName: String,
  userEmail: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", bookingSchema);