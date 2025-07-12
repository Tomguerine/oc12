import { Routes, Route, Navigate } from 'react-router-dom';
import UserProfile from './components/UserProfile.jsx';
import Sidebar from './components/Sidebar.jsx';

export default function App() {
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '60px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/user/12" replace />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}
