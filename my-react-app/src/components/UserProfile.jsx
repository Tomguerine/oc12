import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import ActivityChart from './ActivityChart.jsx';
import AverageSessionsChart from './AverageSessionsChart.jsx';
import PerformanceRadarChart from './PerformanceRadarChart.jsx';
import ScoreRadialChart from './ScoreRadialChart.jsx';
import KeyDataCard from './KeyDataCard.jsx';
import {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../services/userService.js';

export default function UserProfile() {
  const userId = 12;
  const [mainData, setMainData] = useState(null);
  const [activity, setActivity] = useState(null);
  const [average, setAverage] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [main, act, avg, perf] = await Promise.all([
          getUserMainData(userId),
          getUserActivity(userId),
          getUserAverageSessions(userId),
          getUserPerformance(userId),
        ]);
        setMainData(main);
        setActivity(act);
        setAverage(avg);
        setPerformance(perf);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  const score = mainData?.todayScore ?? mainData?.score ?? 0;

  if (error) {
    return (
      <div>
        <Header />
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h2>{mainData?.userInfos?.firstName}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 60%', minWidth: 300 }}>
          <ActivityChart data={activity} />
          <AverageSessionsChart data={average} />
          <PerformanceRadarChart data={performance} />
          <ScoreRadialChart value={score} />
        </div>
        <div style={{ flex: '1 1 30%', minWidth: 200 }}>
          {mainData &&
            Object.entries(mainData.keyData || {}).map(([label, value]) => (
              <KeyDataCard key={label} label={label} value={value} />
            ))}
        </div>
      </div>
    </div>
  );
}
