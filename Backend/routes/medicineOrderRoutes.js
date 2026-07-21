import express from "express";
import MedicineOrder from "../models/MedicineOrder.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {

  res.json(await MedicineOrder.find());

});

router.post("/", protect, async (req, res) => {

  res.json(await MedicineOrder.create(req.body));

});

router.put("/:id", protect, async (req, res) => {

  res.json(
    await MedicineOrder.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
  );

});

router.delete("/:id", protect, async (req, res) => {

  await MedicineOrder.findByIdAndDelete(req.params.id);

  res.json({
    message: "Medicine Order Deleted",
  });

});

export default router;