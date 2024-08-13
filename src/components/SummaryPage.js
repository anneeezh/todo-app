import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SummaryPage ({ tasks }) {

  const [sortCriterion, setSortCriterion] = useState('date');

  const handleSortChange = (e) => {
    setSortCriterion(e.target.value);
  };

  const sortTasks = (tasks) => {
    return [...tasks].sort((a, b) => {
      if (sortCriterion === 'date') {
        const dateA = new Date(`${a.date}T${a.time || '00:00'}`);
        const dateB = new Date(`${b.date}T${b.time || '00:00'}`);
        return dateA - dateB;
      } else if (sortCriterion === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  const sortedTasks = sortTasks(tasks);

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1>Tasks Summary</h1>

        <Link to="/create">
          <button style={styles.button}>Add Task</button>
        </Link>

        <div style={styles.controls}>
          <label>
            Sort by:
            <select value={sortCriterion} onChange={handleSortChange}>
              <option value="date">Date & Time</option>
              <option value="category">Category</option>
            </select>
          </label>
        </div>

        <div style={styles.tasksContainer}>
          {tasks.length === 0 ? (
            <p>No tasks available</p>
          ) : (
            sortedTasks.map((task, index) => (
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
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: 'url("/backgroundIMG.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    color: 'white',
    padding: '20px',
  },
  controls: {
    marginTop: '20px',
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