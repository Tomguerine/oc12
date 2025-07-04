import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

export default function PerformanceRadarChart({ data }) {
  if (!data) return null;
  const kindMap = data.kind;
  const chartData = data.data.map((d) => ({ ...d, kind: kindMap[d.kind] }));
  return (
    <ResponsiveContainer width="100%" height={250}>
      <RadarChart data={chartData} outerRadius="70%">
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={{ fill: '#fff', fontSize: 12 }} />
        <Radar dataKey="value" stroke="#ff0101" fill="#ff0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
