import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateTaskPage ({ addTask }) {
  const [task, setTask] = useState({
    name: '',
    description: '',
    category: '',
    customCategory: '',
    dateTime: '',
    color: '#ffffff',
    emoji: '📝',
    customEmoji: '',
  });
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [isCustomEmoji, setIsCustomEmoji] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === 'Other') {
      setIsCustomCategory(true);
      setTask({ ...task, category: '' });
    } else {
      setIsCustomCategory(false);
      setTask({ ...task, category: value });
    }
  };

  const handleEmojiChange = (e) => {
    const value = e.target.value;
    if (value === 'Other') {
      setIsCustomEmoji(true);
      setTask({ ...task, emoji: '' });
    } else {
      setIsCustomEmoji(false);
      setTask({ ...task, emoji: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalCategory = isCustomCategory ? task.customCategory : task.category;
    const finalEmoji = isCustomEmoji ? task.customEmoji : task.emoji;

    const finalTask = {
      ...task,
      category: finalCategory,
      emoji: finalEmoji,
    };

    addTask(finalTask);
    navigate('/summary');
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1>Create a New Task</h1>

        <form onSubmit={handleSubmit} style={styles.form}>

          <label>
            Name:
            <input type="text" 
            name="name" 
            placeholder='Task Name - "Physics Homework"'
            value={task.name} 
            onChange={handleChange} required />
          </label>

          <label>
            Description:
            <textarea name="description"           
            placeholder='Task Description - "Finish problem set xx on page...'          
            value={task.description} 
            onChange={handleChange} 
            rows="5" // Makes the textarea bigger (height)
            cols="40" // Makes the textarea wider (width)
            style={styles.textarea}
            required />
          </label>

          <label>
            Category:
            {isCustomCategory ? (
              <input type="text" 
              name="customCategory" 
              value={task.customCategory} 
              onChange={handleChange} required />
            ) : (
              <select name="category" 
              value={task.category} 
              onChange={handleCategoryChange}>
                <option value=" ">Select a category</option>
                <option value=" ">-----------------</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Family">Family</option>
                <option value="Other">Other</option>
              </select>
            )}
          </label>

          <label>
            Date:
            <input type="date" 
            name="date" 
            value={task.date} 
            onChange={handleChange} required />
          </label>

          <label>
            Time (Optional):
            <input type="time" 
            name="time" 
            value={task.time} 
            onChange={handleChange} />
          </label>

          <label>
            Color:
            <input type="color" 
            name="color" 
            value={task.color} 
            onChange={handleChange} required />
          </label>

          <label>
            Emoji:
            {isCustomEmoji ? (
              <input type="text" 
              name="customEmoji" 
              value={task.customEmoji} 
              onChange={handleChange} required />
            ) : (
              <select name="emoji" 
              value={task.emoji} 
              onChange={handleEmojiChange}>
                <option value="😊">😊</option>
                <option value="🚀">🚀</option>
                <option value="💪">💪</option>
                <option value="Other">Other</option>
              </select>
            )}
          </label>

          <button type="submit" style={styles.button}>Create Task</button>
        </form>
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default CreateTaskPage;