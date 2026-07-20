import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const barData = [
  { name: "Hospitals", value: 12 },
  { name: "Doctors", value: 35 },
  { name: "Medicines", value: 48 },
  { name: "Appointments", value: 22 },
];

const pieData = [
  { name: "Appointments", value: 40 },
  { name: "Blood Bank", value: 25 },
  { name: "Medicine", value: 35 },
];

const COLORS = ["#1976d2", "#43a047", "#ff9800"];

function Charts() {
  return (
    <div className="charts-container">

      <div className="chart-card">
        <h3>Healthcare Overview</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3>Services</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Charts;