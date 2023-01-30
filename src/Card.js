import React from 'react';
import './Card.css';
import Header from './Header';

const Card = () => {
  let alg = 'Algebra';
  let dis = '15 Concept Videos and Tests';

  return (
    <div style={styles.cardInner}>
      <div style={styles.head}>
        <h3 style={{ color: '#fff' }}>{alg}</h3>
        <h5 style={{ color: '#fff', opacity: 0.7 }}>{dis}</h5>
      </div>
      <Header />
      <Header />
      <Header />

      <Header />
    </div>
  );
};

const styles = {
  cardInner: {
    backgroundColor: '#fff',
    boxShadow: '2px 2px 5px #888888',
    borderRadius: '10px',
    margin: '40px',

    alignItems: 'center',
    width: '400px',
  },
  head: {
    backgroundColor: '#1e88e5',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    height: '90px',
    padding: '5px',
    paddingLeft: '20px',
  },
};

export default Card;

// import React from 'react';

// const Container = ({ children }) => {
//   return <div style={styles.container}>sdfsdfk</div>;
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     boxSizing: 'border-box',
//     '@media (max-width: 800px)': {
//       flexDirection: 'column',
//     },
//   },
// };

// export default Container;
