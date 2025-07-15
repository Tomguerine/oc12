import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from 'recharts';

const DAY_LETTERS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="session-tooltip">
        {payload[0].value} min
      </div>
    );
  }
  return null;
}
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
            margin={{ top: 40, right: 40, left: 40, bottom: 20 }}
          >
            <defs>
              <linearGradient id="sessionGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,1)" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#fff', opacity: 0.6, fontSize: 12 }}
              tickFormatter={(day) => DAY_LETTERS[day - 1]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="url(#sessionGradient)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
