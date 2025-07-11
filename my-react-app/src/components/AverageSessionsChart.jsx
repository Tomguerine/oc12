import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from 'recharts';

const DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export default function AverageSessionsChart({ data }) {
  if (!data) return null;
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data.sessions}
        margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickFormatter={(day) => DAYS[day - 1]}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
