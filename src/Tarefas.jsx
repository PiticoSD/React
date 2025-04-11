import {
  Check,
  CircleCheckIcon,
  CircleX,
  FolderSyncIcon,
  Hourglass,
  StarIcon,
  StarOffIcon,
  Trash2Icon,
  X,
} from "lucide-react";

function Tarefas(props) {
  return (
    <div>
      <ul className="p-6 bg-slate-400 rounded-md space-y-2">
        <div className="flex space-x-14 text-2xl bg-slate-300 rounded-md p-2">
          <h1 className="flex">
            <Hourglass /> TOTAL: {props.total}
          </h1>
          <h1 className="flex">
            <h1 className="text-red-600">
              <X />
            </h1>
            PENDENTES: {props.NaoConcluidas}
          </h1>
          <h1 className="flex">
            <h1 className="text-green-500">
              <Check />
            </h1>
            CONCLUIDAS: {props.concluidas}
          </h1>
        </div>
        {props.tarefas.map((tarefa) => (
          <li key={tarefa.id} className="flex space-x-3">
            <button
              className={`rounded-md bg-slate-300 p-1 ${
                tarefa.EstaCompleta ? "text-green-500" : "text-red-600"
              }`}
              onClick={() => props.OnClickTask(tarefa.id)}
            >
              {tarefa.EstaCompleta ? <CircleCheckIcon /> : <CircleX />}
            </button>
            <button
              onClick={() => props.Favoritar(tarefa.id)}
              className={`rounded-md bg-slate-300 p-1 ${
                tarefa.EstaFavoritada ? "text-yellow-500" : "text-black"
              }`}
            >
              {tarefa.EstaFavoritada ? <StarIcon /> : <StarOffIcon />}
            </button>
            <h1 className="w-full bg-slate-300 rounded-md px-1 text-2xl text-left">
              {tarefa.Tarefa}
            </h1>
            <button className="bg-slate-300 rounded-md p-1">
              <FolderSyncIcon />
            </button>
            <button
              onClick={() => props.DeleteTask(tarefa.id)}
              className="text-red-600 bg-slate-300 rounded-md px-1"
            >
              <Trash2Icon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Tarefas;
