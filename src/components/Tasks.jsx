import { useState } from "react";

function Tasks(props) {
  const [fruta, setFruta] = useState("");
  const [quantidade, setQuantidade] = useState("");
  return (
    <div className="bg-slate-400 rounded text-center">
      <ul className="space-y-3 p-6">
        <li>
          <input
            className="text-2xl rounded outline-slate-400"
            type="text"
            placeholder="nome"
            value={fruta}
            onChange={(event) => setFruta(event.target.value)}
          />
        </li>
        <li>
          <input
            className="text-2xl rounded outline-slate-400"
            type="text"
            placeholder="quantidade"
            value={quantidade}
            onChange={(event) => setQuantidade(event.target.value)}
          />
        </li>
      </ul>
      <button
        onClick={() => {
          props.banana(fruta, quantidade);
          setFruta("");
          setQuantidade("");
        }}
        className=" bg-slate-300 rounded-md p-4 px-7  "
      >
        Adicionar
      </button>
    </div>
  );
}
export default Tasks;
