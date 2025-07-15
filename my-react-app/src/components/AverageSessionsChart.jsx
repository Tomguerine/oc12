import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from 'recharts';
import './AverageSessionsChart.css';

export default function AverageSessionsChart({ data }) {
  if (!data) return null;
  return (
    <div className="session-container">
      <h2 className="session-title">Durée moyenne des sessions</h2>
      <div className="session-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data.sessions}
            margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="day" tickLine={false} axisLine={false} hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#fff"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
