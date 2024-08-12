import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the To-Do App</h1>
      <Link to="/summary">
        <button style={styles.button}>Go to Tasks</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default StartPage;