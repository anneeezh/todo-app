import React from 'react';
import { Link } from 'react-router-dom';

function StartPage () {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1>Welcome to the To-Do App</h1>
        <Link to="/summary">
          <button style={styles.button}>Go to Tasks</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: 'url("/backgroundIMG.jpg")', 
    backgroundSize: 'cover', // Ensures the image covers the entire container
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents repeating the image
    color: 'black', 
  },
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    color: 'white',
    padding: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default StartPage;