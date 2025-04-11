import { useState } from "react";
import Organizador from "./Organizador";
import InputTarefas from "./Tarefas";
function Project() {
  const [tarefas, setTarefas] = useState([]);

  function DeleteTask(tarefaId) {
    const newTasks = tarefas.filter((tarefa) => tarefaId !== tarefa.id);
    setTarefas(newTasks);
  }

  function OnClickTask(taskId) {
    const newTasks = tarefas.map((tarefa) => {
      if (tarefa.id == taskId) {
        return { ...tarefa, EstaCompleta: !tarefa.EstaCompleta };
      }
      return tarefa;
    });
    setTarefas(newTasks);
  }

  function AddTask(tarefa, descricao) {
    const newTask = {
      id: tarefas.length + 1,
      Tarefa: tarefa,
      descricao: descricao,
      EstaCompleta: false,
      mostrarTarefa: false,
    };
    setTarefas([...tarefas, newTask]);
  }

  function MostrasDescricao(tarefaSelecionada) {
    const newTasks = tarefas.map((tarefa) => {
      if (tarefa.id === tarefaSelecionada.id) {
        return {
          ...tarefa,
          mostrarTarefa: !tarefa.mostrarTarefa,
        };
      }
      return tarefa;
    });

    setTarefas(newTasks);
  }

  return (
    <div className="bg-slate-300 h-screen w-screen  flex justify-center  ">
      <div className="w-[600px] space-y-2">
        <h1 className="text-gray-600 text-center text-4xl">
          Organizador de dia
        </h1>
        <InputTarefas AddTask={AddTask} tarefas={tarefas} />
        <Organizador
          tarefas={tarefas}
          DeleteTask={DeleteTask}
          OnClickTask={OnClickTask}
          MostrasDescricao={MostrasDescricao}
        />
      </div>
    </div>
  );
}
export default Project;
