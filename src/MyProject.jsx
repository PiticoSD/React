import { useState } from "react";
import Tarefas from "./Tarefas";
import AddTarefa from "./AdicionarTarefa";

function MyProject() {
  const [frase, setFrase] = useState("");
  const [autor, setAutor] = useState("");
  const [tarefas, SetTarefas] = useState([
    {
      id: 1,
      Tarefa: "cagar",
      EstaCompleta: false,
      EstaFavoritada: false,
      Pasta: "bhanheiro",
    },
  ]);
  const total = tarefas.length;
  const concluidas = tarefas.filter((t) => t.EstaCompleta).length;
  const NaoConcluidas = tarefas.filter((t) => !t.EstaCompleta).length;

  function Favoritar(taskId) {
    const newTasks = tarefas.map((tarefa) => {
      if (tarefa.id == taskId) {
        return { ...tarefa, EstaFavoritada: !tarefa.EstaFavoritada };
      }
      return tarefa;
    });
    SetTarefas(newTasks);
  }

  function DeleteTask(tarefaId) {
    const newTasks = tarefas.filter((tarefa) => tarefaId !== tarefa.id);
    SetTarefas(newTasks);
  }

  function AddItem(tarefa, pasta) {
    const NovasTarefas = {
      id: Date.now(),
      Tarefa: tarefa,
      EstaCompleta: false,
      EstaFavoritada: false,
      Pasta: pasta,
    };
    SetTarefas([...tarefas, NovasTarefas]);
  }
  function OnClickTask(taskId) {
    const newTasks = tarefas.map((tarefa) => {
      if (tarefa.id == taskId) {
        return { ...tarefa, EstaCompleta: !tarefa.EstaCompleta };
      }
      return tarefa;
    });
    SetTarefas(newTasks);
  }

  return (
    <div className="bg-slate-500 min-h-screen p-7 flex justify-center">
      <div className=" text-center space-y-2">
        <h1 className="text-slate-700 text-4xl">GERENCIADOR DE TAREFAS</h1>
        <AddTarefa AddItem={AddItem} />
        <Tarefas
          tarefas={tarefas}
          OnClickTask={OnClickTask}
          Favoritar={Favoritar}
          DeleteTask={DeleteTask}
          NaoConcluidas={NaoConcluidas}
          concluidas={concluidas}
          total={total}
        />
        <div className="bg-slate-400 rounded-md p-5 text-3xl w-[660px] space-y-2 ">
          Frase:<h1>{frase}</h1>
          Autor:<h2>{autor}</h2>
          <button
            className="rounded-md bg-slate-300 text-3xl p-2"
            onClick={() => {
              fetch("https://dummyjson.com/quotes/random")
                .then((res) => res.json())
                .then((data) => {
                  setFrase(data.quote);
                  setAutor(data.author);
                });
            }}
          >
            NovaFrase
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
