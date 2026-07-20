import CountUp from "react-countup";
import "./Dashboard.css";

function StatsCard({ title, value, icon, color }) {
  return (
    <div className="stats-card" style={{ borderTop: `5px solid ${color}` }}>
      <div className="stats-icon">{icon}</div>

      <div>
        <h4>{title}</h4>

        <h2>
          <CountUp end={value} duration={2} />
        </h2>
      </div>
    </div>
  );
}

export default StatsCard;