import "./style.css"
export function Button({children, color, ...rest}) {

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
  
  
  return (
    <button className="button" onClick={adicionarTarefas}>{children}</button>
  )
}