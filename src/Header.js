import React, { useState } from 'react';

const Header = () => {
  const [enabled, setEnabled] = useState(false);
  const [book, setBook] = useState(false);
  const [play, setPlay] = useState(false);
  let header = 'Quadratic Equations';
  let time = '15 Mins';
  return (
    <div
      style={{
        display: 'flex',
        // flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '10px',
        paddingRight: '10px',
        justifyContent: 'space-around',
        width: '400px',
        height: '80px',
      }}
    >
      <span
        style={{
          color: enabled ? '#ffb22b' : 'gray',
          fontSize: '30px',
        }}
        onClick={() => setEnabled(!enabled)}
      >
        &#9733;
      </span>
      <div>
        <h3 style={{ color: '#000', opacity: 0.7 }}>{header}</h3>
        <h5 style={{ color: '#000', opacity: 0.4 }}>{time}</h5>
      </div>
      <span
        style={{
          color: book ? '#9e8cf6' : 'gray',
          fontSize: '30px',
        }}
        onClick={() => setBook(!book)}
      >
        &#9776;
      </span>
      <span
        style={{
          color: play ? '#28c6da' : 'gray',
          fontSize: '30px',
        }}
        onClick={() => setPlay(!play)}
      >
        ▶
      </span>
    </div>
  );
};

export default Header;
