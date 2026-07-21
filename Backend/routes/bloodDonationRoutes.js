import express from "express";
import BloodDonation from "../models/BloodDonation.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {

  res.json(await BloodDonation.find());

});

router.post("/", protect, async (req, res) => {

  res.json(await BloodDonation.create(req.body));

});

router.put("/:id", protect, async (req, res) => {

  res.json(
    await BloodDonation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
  );

});

router.delete("/:id", protect, async (req, res) => {

  await BloodDonation.findByIdAndDelete(req.params.id);

  res.json({
    message: "Blood Donation Deleted",
  });

});

export default router;