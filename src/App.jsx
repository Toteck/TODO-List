import { useState } from 'react';
import "./App.css"

export default function App() {
  const [tarefa, setTarefa] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  
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
      <h1 id="title">Lista de Tarefas</h1>
      <div id="nav">
        <input
          id="input_task"
          type="text"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        
        <button id= "button_adc" onClick={adicionarTarefas}>+</button>
      
      </div>
      
      <ul id="task_list">
        {tarefa.map(task => (
          <li key={task.id}>
            <span>{task.id}</span>
            <span>{task.title}</span>
            <button id="button_concluir" onClick={() => deleteTask(task.id)}>&#9989;</button>
            <button id="button_excluir" onClick={() => deleteTask(task.id)}>&#10060;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


