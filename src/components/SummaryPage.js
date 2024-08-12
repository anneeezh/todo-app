import React from 'react';
import { Link } from 'react-router-dom';

const SummaryPage = ({ tasks }) => {
  return (
    <div style={styles.container}>
      <h1>Tasks Summary</h1>

      <Link to="/create">
        <button style={styles.button}>Add Task</button>
      </Link>

      <div style={styles.tasksContainer}>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task, index) => (
            <div key={index} style={{ ...styles.taskCard, backgroundColor: task.color }}>
              <span style={styles.emoji}>{task.emoji}</span>
              <div>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
                <p><strong>Category:</strong> {task.category}</p>
                <p><strong>Date & Time:</strong> {task.date} {task.time}</p>
              </div>
            </div>
          ))
        )}
      </div>
      
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  tasksContainer: {
    marginTop: '20px',
  },
  taskCard: {
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  emoji: {
    fontSize: '30px',
    marginRight: '15px',
  },
};

export default SummaryPage;