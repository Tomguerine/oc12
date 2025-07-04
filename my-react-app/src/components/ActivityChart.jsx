import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

export default function ActivityChart({ data }) {
  if (!data) return null;
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data.sessions} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" tickLine={false} />
        <YAxis orientation="right" tickLine={false} axisLine={false} />
        <Tooltip />
        <Bar dataKey="kilogram" fill="#282D30" radius={[5, 5, 0, 0]} barSize={7} />
        <Bar dataKey="calories" fill="#E60000" radius={[5, 5, 0, 0]} barSize={7} />
      </BarChart>
    </ResponsiveContainer>
  );
}
