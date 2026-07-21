import express from "express";
import Doctor from "../models/Doctor.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {
  res.json(await Doctor.find());
});

router.post("/", protect, async (req, res) => {
  res.json(await Doctor.create(req.body));
});

router.put("/:id", protect, async (req, res) => {
  res.json(await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", protect, async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ message: "Doctor Deleted" });
});

export default router;