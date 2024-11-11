import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/todosSlice';

const App = () => {
  const [taskText, setTaskText] = useState('');
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id);
    return (
      <div>
        <h1>Lista de Tareas</h1>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Escribir task"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default App;