import UserProfile from './components/UserProfile.jsx';
import Sidebar from './components/Sidebar.jsx';

export default function App() {
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '60px' }}>
        <UserProfile />
      </div>
    </div>
  );
}
