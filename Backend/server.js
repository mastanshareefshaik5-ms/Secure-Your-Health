import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Database
import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import hospitalRoutes from "./routes/hospitalRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import medicineRoutes from "./routes/medicineRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import bloodBankRoutes from "./routes/bloodBankRoutes.js";
import bloodDonationRoutes from "./routes/bloodDonationRoutes.js";
import medicineOrderRoutes from "./routes/medicineOrderRoutes.js";

dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Secure Your Health Backend Running Successfully 🚀",
  });
});

// API Routes
app.use("/api/auth", authRoutes);

app.use("/api/hospitals", hospitalRoutes);

app.use("/api/doctors", doctorRoutes);

app.use("/api/medicines", medicineRoutes);

app.use("/api/appointments", appointmentRoutes);

app.use("/api/bloodbanks", bloodBankRoutes);

app.use("/api/blooddonations", bloodDonationRoutes);

app.use("/api/medicineorders", medicineOrderRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Global Error Handler
app.use((err, req, res, next) => {

  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });

});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`🚀 Server running on port ${PORT}`);

});