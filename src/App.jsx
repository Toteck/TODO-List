import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const addTask = () => {
    if (currentTask.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        title: currentTask,
        done: false
      };
      setTasks([...tasks, newTask]);
      setCurrentTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span className={task.done ? 'task-done' : ''}>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>Concluida</button>
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


