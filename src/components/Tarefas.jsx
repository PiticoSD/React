import { useState } from "react";

function InputTarefas(props) {
  const [tarefa, SetTarefa] = useState("");
  const [descricao, SetDescricao] = useState("");
  return (
    <div className="text-center">
      <ul className="bg-slate-400 rounded-md space-y-2 p-6">
        <li>
          <input
            className="text-3xl rounded outline-slate-600 w-full"
            type="text"
            placeholder="tarefa"
            value={tarefa}
            onChange={(event) => SetTarefa(event.target.value)}
          ></input>
        </li>
        <li>
          <input
            className="text-3xl rounded outline-slate-600 w-full"
            type="text"
            placeholder="Descricao"
            value={descricao}
            onChange={(event) => SetDescricao(event.target.value)}
          ></input>
        </li>
        <li>
          <button
            className="rounded-md bg-slate-200 w-full py-2 text-3xl text-slate-700"
            onClick={() => {
              if (tarefa.length > 31) alert("Maximo 32 caracteres");
              if (props.tarefas.length > 10) alert("maximo de 10 tarefas ");
              if (!tarefa.trim() || !descricao.trim())
                alert("escreva alguma coisa nos dois campos");
              else props.AddTask(tarefa, descricao);
              SetDescricao("");
              SetTarefa("");
            }}
          >
            Adicionar tarefa
          </button>
        </li>
      </ul>
    </div>
  );
}
export default InputTarefas;
