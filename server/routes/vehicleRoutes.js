import express from "express";
import Vehicle from "../models/Vehicle.js";
const router = express.Router();

// GET all
router.get("/", async (req, res) => {
  const vehicles = await Vehicle.find().sort({ createdAt: -1 });
  res.send(vehicles);
});

// GET single
router.get("/:id", async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);
  res.send(vehicle);
});

// POST
router.post("/", async (req, res) => {
  const newVehicle = new Vehicle(req.body);
  await newVehicle.save();
  res.send(newVehicle);
});

// PUT
router.put("/:id", async (req, res) => {
  const updated = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.send({ message: "Deleted successfully" });
});

export default router;