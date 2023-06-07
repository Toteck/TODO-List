import { useState } from 'react';
import "./App.css"

export default function App() {
  const [tarefa, setTarefa] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
// setCurrentTask
  function adicionarTarefas() {
    if (currentTask.trim() !== '') {
      const newTask = {
        id: tarefa.length + 1,
        title: currentTask,
        done: false
      };
      setTarefa([...tarefa, newTask]);
      setCurrentTask('');
    }
  }

  function deleteTask(taskId) {
    const updatedtarefa = tarefa.filter(task => task.id !== taskId);
    setTarefa(updatedtarefa);
  }

  return (
    <div id= "container">
      <h1>Lista de Tarefas</h1>
      <div id= "nav">
        <input
          type="text"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          placeholder="Digite uma tarefa"
        />
      </div>
      <button onClick={adicionarTarefas}>Adicionar</button>
      <ul>
        {tarefa.map(task => (
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


