import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

export default function ScoreRadialChart({ value }) {
  if (value == null) return null;
  const percent = value * 100;
  const data = [{ name: 'score', value: percent, fill: '#ff0000' }];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <RadialBarChart
        innerRadius="80%"
        outerRadius="100%"
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <RadialBar
          minAngle={15}
          background
          clockWise
          dataKey="value"
        />
      </RadialBarChart>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <strong>{percent}%</strong>
        <p>de votre objectif</p>
      </div>
    </ResponsiveContainer>
  );
}
