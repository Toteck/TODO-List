import { useState } from 'react';
import { Button } from "./components/Button"
import "./App.css"

export default function App() {
  const [tarefa, setTarefa] = useState([]); // Estado para armazenar as tarefas
  const [currentTask, setCurrentTask] = useState(''); // Estado para armazenar a tarefa atual
  
  function adicionarTarefas() {
    if (currentTask.trim() !== '') { // Verifica se a tarefa atual não está vazia ou contém apenas espaços em branco
      const newTask = {
        id: tarefa.length + 1, // Cria um ID para uma nova tarefa, baseado no tamanho do array do array de tarefas atual
        title: currentTask, // Define o título da nova tarefa atual
        done: false // Define o estado da tarefa como "false", indicando que ela ainda não foi concluída
      };
      setTarefa([...tarefa, newTask]); // Adiciona uma nova tarefa a variável de estado 'tarefa', copiando o array existente e adicionando a nova tarefa no final
      setCurrentTask(''); // Limpa o campo de entrada atual, definindo-o como uma string vazia
    }
  }

  function deleteTask(taskId) {
    const updatedtarefa = tarefa.filter(task => task.id !== taskId); // Filtra o array de tarefas para criar um novo array excluindo a tarefa com o ID fornecido
    setTarefa(updatedtarefa); // Atualiza o estado 'tarefa' com o novo array de tarefas, removendo a tarefa com o ID fornecido.
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

        {/* <Button>Adicionar Tarefa</Button> */}
        
        <button id="button_adc" onClick={adicionarTarefas}>+</button>
        
      
      </div>
      
      <ul id="task_list">
        {tarefa.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
            <button id="button_concluir" onClick={() => deleteTask(task.id)}>&#9989;</button>
            <button id="button_excluir" onClick={() => deleteTask(task.id)}>&#10060;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


