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

function Tasks(props) {
  return (
    <div>
      <ul className="p-6 bg-slate-400 rounded-md space-y-2">
        <div className="flex space-x-14 text-2xl bg-slate-300 rounded-md p-2">
          <h1 className="flex">
            <Hourglass /> TOTAL: {props.total}
          </h1>
          <h1 className="flex">
            <span className="text-red-600">
              <X />
            </span>
            PENDING: {props.notCompleted}
          </h1>
          <h1 className="flex">
            <span className="text-green-500">
              <Check />
            </span>
            COMPLETED: {props.completed}
          </h1>
        </div>
        {props.tasks.map((task) => (
          <li key={task.id} className="flex space-x-3">
            <button
              className={`rounded-md bg-slate-300 p-1 ${
                task.isCompleted ? "text-green-500" : "text-red-600"
              }`}
              onClick={() => props.toggleTask(task.id)}
            >
              {task.isCompleted ? <CircleCheckIcon /> : <CircleX />}
            </button>
            <button
              onClick={() => props.toggleFavorite(task.id)}
              className={`rounded-md bg-slate-300 p-1 ${
                task.isFavorited ? "text-yellow-500" : "text-black"
              }`}
            >
              {task.isFavorited ? <StarIcon /> : <StarOffIcon />}
            </button>
            <h1 className="w-full bg-slate-300 rounded-md px-1 text-2xl text-left">
              {task.task}
            </h1>
            <button className="bg-slate-300 rounded-md p-1">
              <FolderSyncIcon />
            </button>
            <button
              onClick={() => props.deleteTask(task.id)}
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
export default Tasks;
