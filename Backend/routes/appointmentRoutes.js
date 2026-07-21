import express from "express";
import Appointment from "../models/Appointment.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {
  res.json(await Appointment.find());
});

router.post("/", protect, async (req, res) => {
  res.json(await Appointment.create(req.body));
});

router.put("/:id", protect, async (req, res) => {
  res.json(await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", protect, async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: "Appointment Deleted" });
});

export default router;