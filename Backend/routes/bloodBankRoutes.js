import express from "express";
import BloodBank from "../models/BloodBank.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {

  res.json(await BloodBank.find());

});

router.post("/", protect, async (req, res) => {

  res.json(await BloodBank.create(req.body));

});

router.put("/:id", protect, async (req, res) => {

  res.json(
    await BloodBank.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
  );

});

router.delete("/:id", protect, async (req, res) => {

  await BloodBank.findByIdAndDelete(req.params.id);

  res.json({
    message: "Blood Bank Deleted",
  });

});

export default router;