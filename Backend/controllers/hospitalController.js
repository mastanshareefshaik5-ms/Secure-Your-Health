const Hospital = require("../models/Hospital");

// GET All Hospitals
exports.getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST Hospital
exports.createHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    res.status(201).json(hospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT Hospital
exports.updateHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(hospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE Hospital
exports.deleteHospital = async (req, res) => {
  try {
    await Hospital.findByIdAndDelete(req.params.id);
    res.json({ message: "Hospital Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};