import { useState } from "react";

function AddTarefa(props) {
  const [tarefa, SetTarefa] = useState("");
  const [Pasta, SetPasta] = useState("");
  return (
    <div>
      <ul className="p-6 bg-slate-400 rounded-md space-y-2">
        <li>
          <input
            className="rounded-md bg-slate-300 w-full text-3xl"
            type="text"
            placeholder="TAREFA"
            onChange={(e) => SetTarefa(e.target.value)}
            value={tarefa}
          ></input>
        </li>
        <li>
          <input
            value={Pasta}
            className="rounded-md bg-slate-300 w-full text-3xl"
            type="text"
            placeholder="PASTA"
            onChange={(e) => SetPasta(e.target.value)}
          ></input>
        </li>
        <li>
          <button
            className="rounded-md bg-slate-300 w-full text-3xl"
            onClick={() => {
              props.AddItem(tarefa, Pasta);
              SetTarefa("");
              SetPasta("");
            }}
          >
            ADICIONAR
          </button>
        </li>
      </ul>
    </div>
  );
}
export default AddTarefa;
