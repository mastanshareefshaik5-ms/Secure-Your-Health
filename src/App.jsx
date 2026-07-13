import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Hospital from "./Components/Hospital/Hospital";
import Doctor from "./Components/Doctors/Doctor";
import Medicine from "./Components/Medicines/Medicine";
import Ambulance from "./Components/Ambulance/Ambulance";
import Appointment from "./Components/Appointment/Appointment";
import HealthTips from "./Components/Healthtips/Healthtips";
import Contact from "./Components/Contacts/Contact";

import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";

import BMI from "./Components/BMI/BMI";
import BloodDonation from "./Components/BloodDonation/BloodDonation";
import BloodBank from "./Components/BloodBank/BloodBank";
import MedicineOrder from "./Components/MedicineOrder/MedicineOrder";
import Cart from "./Components/Cart/Cart";
import ChatBot from "./Components/ChatBot/ChatBot";
import DarkMode from "./Components/DarkMode/DarkMode";

function App() {
  return (
    <>
      <Navbar />

      <div className="app-container">
        <Sidebar />

        <main className="main-content">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/hospitals" element={<Hospital />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/medicines" element={<Medicine />} />
            <Route path="/ambulance" element={<Ambulance />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/healthtips" element={<HealthTips />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/bmi" element={<BMI />} />

            <Route path="/blooddonation" element={<BloodDonation />} />
            <Route path="/blooddonation/:id" element={<BloodDonation />} />

            <Route path="/bloodbank" element={<BloodBank />} />

            <Route path="/medicineorder" element={<MedicineOrder />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/chatbot" element={<ChatBot />} />

            <Route path="/darkmode" element={<DarkMode />} />

          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;