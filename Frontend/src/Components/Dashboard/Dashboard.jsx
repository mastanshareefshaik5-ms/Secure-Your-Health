import { useEffect, useState } from "react";
import API from "../../api/api";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import {
  Line,
  Doughnut,
} from "react-chartjs-2";

import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend
);

function Dashboard() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const [stats, setStats] = useState({

    hospitals:0,
    doctors:0,
    medicines:0,
    appointments:0,

  });

  useEffect(()=>{

    loadDashboard();

  },[]);

  const loadDashboard=async()=>{

    try{

      const hospital=await API.get("/hospitals");
      const doctor=await API.get("/doctors");
      const medicine=await API.get("/medicines");
      const appointment=await API.get("/appointments");

      setStats({

        hospitals:hospital.data.length,
        doctors:doctor.data.length,
        medicines:medicine.data.length,
        appointments:appointment.data.length,

      });

    }

    catch(err){

      console.log(err);

    }

  };

  const lineData={

    labels:[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
    ],

    datasets:[

      {

        label:"Appointments",

        data:[
          5,
          12,
          9,
          16,
          20,
          stats.appointments
        ],

        borderColor:"#0d6efd",

        backgroundColor:"rgba(13,110,253,.2)",

        tension:.4,

        fill:true,

      }

    ]

  };

  const pieData={

    labels:[
      "Hospitals",
      "Doctors",
      "Medicines",
      "Appointments"
    ],

    datasets:[

      {

        data:[

          stats.hospitals,
          stats.doctors,
          stats.medicines,
          stats.appointments,

        ],

        backgroundColor:[

          "#0d6efd",
          "#198754",
          "#ffc107",
          "#dc3545",

        ],

      }

    ]

  };
    return (

    <div className="dashboard">

      <div className="dashboard-header">

        <div>

          <h1>
            Welcome,
            {" "}
            {user?.name || "Admin"} 👋
          </h1>

          <p>
            Secure Your Health Management Dashboard
          </p>

        </div>

      </div>

      <div className="stats-grid">

        <div className="stat-card hospitals">

          <h3>🏥 Hospitals</h3>

          <h2>{stats.hospitals}</h2>

          <span>Total Registered Hospitals</span>

        </div>

        <div className="stat-card doctors">

          <h3>👨‍⚕️ Doctors</h3>

          <h2>{stats.doctors}</h2>

          <span>Total Doctors</span>

        </div>

        <div className="stat-card medicines">

          <h3>💊 Medicines</h3>

          <h2>{stats.medicines}</h2>

          <span>Available Medicines</span>

        </div>

        <div className="stat-card appointments">

          <h3>📅 Appointments</h3>

          <h2>{stats.appointments}</h2>

          <span>Total Bookings</span>

        </div>

      </div>

      <div className="charts-container">

        <div className="chart-box">

          <h2>
            Monthly Appointments
          </h2>

          <Line
            data={lineData}
          />

        </div>

        <div className="chart-box">

          <h2>
            Overall Distribution
          </h2>

          <Doughnut
            data={pieData}
          />

        </div>

      </div>

      <div className="bottom-section">

        <div className="activity">

          <h2>
            Recent Activity
          </h2>

          <table>

            <thead>

              <tr>

                <th>Activity</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Hospital Added</td>

                <td>✅ Completed</td>

              </tr>

              <tr>

                <td>Doctor Registered</td>

                <td>✅ Completed</td>

              </tr>

              <tr>

                <td>Medicine Updated</td>

                <td>✅ Completed</td>

              </tr>

              <tr>

                <td>Appointment Booked</td>

                <td>✅ Completed</td>

              </tr>

            </tbody>

          </table>

        </div>

        <div className="quick-actions">

          <h2>
            Quick Actions
          </h2>

          <button>
            Add Hospital
          </button>

          <button>
            Add Doctor
          </button>

          <button>
            Add Medicine
          </button>

          <button>
            Book Appointment
          </button>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;