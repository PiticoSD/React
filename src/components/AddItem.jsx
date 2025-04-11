import { CircleCheck, CircleX, Trash2Icon } from "lucide-react";

function AddItem(promp) {
  return (
    <div>
      <ul className="bg-slate-400 p-6 rounded space-y-2">
        {promp.itens.map((item) => (
          <li key={item.id} className="flex space-x-3">
            <button
              onClick={() => {
                promp.newItens(item.id);
              }}
              className="bg-slate-300 rounded text-2xl w-full text-left flex"
            >
              {item.EstaCompleta ? <CircleCheck /> : <CircleX />}
              {item.fruta}
            </button>
            <h1 className="rounded bg-slate-300 text-2xl px-3">
              {item.quantidade}
            </h1>
            <button
              onClick={() => {
                promp.deleteItem(item.id);
              }}
              className="bg-slate-300 rounded text-2xl px-3"
            >
              <Trash2Icon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddItem;
