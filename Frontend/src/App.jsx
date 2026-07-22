import { Routes, Route, Navigate } from "react-router-dom";

// Authentication
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ProtectedRoute from "./Components/ProtectedRoute";

// Layout
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

// Pages
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Hospital from "./Components/Hospital/Hospital";
import Doctor from "./Components/Doctors/Doctor";
import Medicine from "./Components/Medicines/Medicine";
import Appointment from "./Components/Appointment/Appointment";
import BloodBank from "./Components/BloodBank/BloodBank";
import BloodDonation from "./Components/BloodDonation/BloodDonation";
import BMI from "./Components/BMI/BMI";
import MedicineOrder from "./Components/MedicineOrder/MedicineOrder";
import Cart from "./Components/Cart/Cart";
import ChatBot from "./Components/ChatBot/ChatBot";
import Profile from "./Components/Profile/Profile";
import Contact from "./Components/Contacts/Contact";
import HealthTips from "./Components/Healthtips/Healthtips";

const Layout = ({ children }) => (
  <>
    <Navbar />

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f4f8fb",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          marginLeft: "250px",
          marginTop: "70px",
          padding: "30px",
          minHeight: "calc(100vh - 70px)",
        }}
      >
        {children}
      </main>
    </div>

    <Footer />
  </>
);

function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/hospitals"
        element={
          <ProtectedRoute>
            <Layout>
              <Hospital />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctors"
        element={
          <ProtectedRoute>
            <Layout>
              <Doctor />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/medicines"
        element={
          <ProtectedRoute>
            <Layout>
              <Medicine />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/appointments"
        element={
          <ProtectedRoute>
            <Layout>
              <Appointment />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/bloodbank"
        element={
          <ProtectedRoute>
            <Layout>
              <BloodBank />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/blooddonation"
        element={
          <ProtectedRoute>
            <Layout>
              <BloodDonation />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/bmi"
        element={
          <ProtectedRoute>
            <Layout>
              <BMI />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/medicineorder"
        element={
          <ProtectedRoute>
            <Layout>
              <MedicineOrder />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Layout>
              <Cart />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/chatbot"
        element={
          <ProtectedRoute>
            <Layout>
              <ChatBot />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Layout>
              <Profile />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Layout>
              <Contact />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/healthtips"
        element={
          <ProtectedRoute>
            <Layout>
              <HealthTips />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/home" replace />} />

    </Routes>
  );
}

export default App;