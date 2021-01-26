import React from 'react';
/* import { Counter } from './features/counter/Counter';  */
import './App.css';
import { Input } from './features/task/Input';
import { TasksDisplay } from './features/task/TasksDisplay';

function App() {
  return (
    <div className="App">
      <Input />  
      <div className="tasksContainer">
        <TasksDisplay type='important' />
        <TasksDisplay type='regular' />
        <TasksDisplay type='small' />
      </div>
    </div>
  );
}

export default App;
