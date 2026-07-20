const express = require("express");
const router = express.Router();

const {
  getHospitals,
  createHospital,
  updateHospital,
  deleteHospital,
} = require("../controllers/hospitalController");

router.get("/", getHospitals);
router.post("/", createHospital);
router.put("/:id", updateHospital);
router.delete("/:id", deleteHospital);

module.exports = router;