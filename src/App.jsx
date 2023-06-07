import { useState } from 'react';
import "./App.css"

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');


  function adicionarTarefas() {
    if (currentTask.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        title: currentTask,
        done: false
      };
      setTasks([...tasks, newTask]);
      setCurrentTask('');
    }
  }

  function deleteTask(taskId) {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <div id= "container">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefas}>Adicionar</button>
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


