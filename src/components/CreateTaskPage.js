import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTaskPage = ({ addTask }) => {
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
      <h1>Create a New Task</h1>

      <form onSubmit={handleSubmit} style={styles.form}>

        <label>
          Name:
          <input type="text" 
          name="name" 
          value={task.name} 
          onChange={handleChange} required />
        </label>

        <label>
          Description:
          <textarea name="description" 
          value={task.description} 
          onChange={handleChange} required />
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
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default CreateTaskPage;