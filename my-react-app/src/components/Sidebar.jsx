import React from 'react';

export default function Sidebar() {
  const navStyle = {
    width: '60px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    background: '#000',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const linkStyle = {
    color: '#fff',
    margin: '1rem 0',
    fontSize: '1.5rem',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <a href="#" style={linkStyle}>🏋️</a>
      <a href="#" style={linkStyle}>🏃</a>
      <a href="#" style={linkStyle}>🧘</a>
      <a href="#" style={linkStyle}>🚴</a>
    </nav>
  );
}
