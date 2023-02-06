import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div
      style={{
        backgroundColor: 'blue',
        padding: '20px',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Link to="/">
        <h1 style={{ color: '#fff' }}>Home</h1>
      </Link>
      <Link to="about">
        <h1 style={{ color: '#fff' }}>About</h1>{' '}
      </Link>
      <Link to="contact">
        <h1 style={{ color: '#fff' }}>Contact</h1>
      </Link>
    </div>
  );
};

export default Header;
