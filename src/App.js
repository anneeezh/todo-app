import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import SummaryPage from './components/SummaryPage';
import CreateTaskPage from './components/CreateTaskPage';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/summary" element={<SummaryPage tasks={tasks} />} />
        <Route path="/create" element={<CreateTaskPage addTask={addTask} />} />
      </Routes>
    </Router>
  );
};

export default App;