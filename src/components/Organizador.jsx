import {
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  CircleX,
  Trash2Icon,
} from "lucide-react";

function Organizador(props) {
  return (
    <div>
      <ul className="bg-slate-400 rounded p-6 space-y-2">
        {props.tarefas.map((tarefa) => (
          <li key={tarefa.id} className="flex space-x-3">
            {/* botao de certinho e errado para definir se fez ou nao a tarefa com a funcao criada no project*/}
            <button
              className="bg-slate-300 rounded-md px-1"
              onClick={() => props.OnClickTask(tarefa.id)}
            >
              {tarefa.EstaCompleta ? <CircleCheck /> : <CircleX />}
            </button>

            {/* nome da tarefa */}
            <button className="rounded-md bg-slate-300 text-2xl w-full text-left px-1">
              {tarefa.Tarefa}
            </button>

            {/* botao de ver detalhes */}
            <button
              onClick={() => props.MostrasDescricao(tarefa)}
              className="bg-slate-300 rounded-md px-1"
            >
              {tarefa.mostrarTarefa ? <ChevronLeft /> : <ChevronRight />}
            </button>

            {/* botao de lixeira com a funcao do project deleteTask */}
            <button
              className="rounded-md bg-slate-300 px-1"
              onClick={() => props.DeleteTask(tarefa.id)}
            >
              <Trash2Icon></Trash2Icon>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Organizador;
