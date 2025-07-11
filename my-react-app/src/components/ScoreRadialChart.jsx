import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

export default function ScoreRadialChart({ value }) {
  if (value == null) return null;
  const percent = value * 100;
  const data = [{ name: 'score', value: percent, fill: '#ff0000' }];

  return (
    <div className="score-chart-container">
      <ResponsiveContainer width="100%" height="100%">
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
      </ResponsiveContainer>
      <div className="score-chart-label">
        <strong>{percent}%</strong>
        <p>de votre objectif</p>
      </div>
    </div>
  );
}
