import express from "express";
import Vehicle from "../models/Vehicle.js";
const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const vehicles = await Vehicle.find().sort({ createdAt: -1 });
  res.send(vehicles);
});

// Get by ID
router.get("/:id", async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);
  res.send(vehicle);
});

// Add
router.post("/", async (req, res) => {
  const newVehicle = new Vehicle(req.body);
  await newVehicle.save();
  res.send(newVehicle);
});

// Update
router.put("/:id", async (req, res) => {
  const updated = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.send({ message: "Vehicle deleted" });
});

export default router;