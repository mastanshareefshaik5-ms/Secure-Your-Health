import express from "express";
import Hospital from "../models/Hospital.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {
  res.json(await Hospital.find());
});

router.post("/", protect, async (req, res) => {
  res.json(await Hospital.create(req.body));
});

router.put("/:id", protect, async (req, res) => {
  res.json(await Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", protect, async (req, res) => {
  await Hospital.findByIdAndDelete(req.params.id);
  res.json({ message: "Hospital Deleted" });
});

export default router;