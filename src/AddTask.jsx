import { useState } from "react";

function AddTask(props) {
  const [task, setTask] = useState("");
  const [folder, setFolder] = useState("");
  return (
    <div>
      <ul className="p-6 bg-slate-400 rounded-md space-y-2">
        <li>
          <input
            className="rounded-md bg-slate-300 w-full text-3xl"
            type="text"
            placeholder="TASK"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
        </li>
        <li>
          <input
            value={folder}
            className="rounded-md bg-slate-300 w-full text-3xl"
            type="text"
            placeholder="FOLDER"
            onChange={(e) => setFolder(e.target.value)}
          />
        </li>
        <li>
          <button
            className="rounded-md bg-slate-300 w-full text-3xl"
            onClick={() => {
              props.addTask(task, folder);
              setTask("");
              setFolder("");
            }}
          >
            ADD
          </button>
        </li>
      </ul>
    </div>
  );
}
export default AddTask;
