import express from "express";
import Medicine from "../models/Medicine.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {
  res.json(await Medicine.find());
});

router.post("/", protect, async (req, res) => {
  res.json(await Medicine.create(req.body));
});

router.put("/:id", protect, async (req, res) => {
  res.json(await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", protect, async (req, res) => {
  await Medicine.findByIdAndDelete(req.params.id);
  res.json({ message: "Medicine Deleted" });
});

export default router;