import { useState } from "react";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

function MyProject() {
  const [fact, setFact] = useState("");
  const [tasks, setTasks] = useState([]);
  const total = tasks.length;
  const completed = tasks.filter((t) => t.isCompleted).length;
  const notCompleted = tasks.filter((t) => !t.isCompleted).length;

  function toggleFavorite(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isFavorited: !task.isFavorited };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => taskId !== task.id);
    setTasks(updatedTasks);
  }

  function addTask(taskText, folder) {
    const newTask = {
      id: Date.now(),
      task: taskText,
      isCompleted: false,
      isFavorited: false,
      folder: folder,
    };
    setTasks([...tasks, newTask]);
  }

  function toggleTask(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="bg-slate-500 min-h-screen p-7 flex justify-center">
      <div className="text-center space-y-2">
        <h1 className="text-slate-700 text-4xl">TASK MANAGER</h1>
        <AddTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          toggleTask={toggleTask}
          toggleFavorite={toggleFavorite}
          deleteTask={deleteTask}
          notCompleted={notCompleted}
          completed={completed}
          total={total}
        />
        <div className="bg-slate-400 rounded-md p-5 text-3xl w-[660px] space-y-2">
          Fact:<h1>{fact}</h1>
          <button
            className="rounded-md bg-slate-300 text-3xl p-2"
            onClick={() => {
              fetch("https://uselessfacts.jsph.pl/random.json?language=pt")
                .then((res) => res.json())
                .then((data) => {
                  setFact(data.text);
                });
            }}
          >
            New Fact
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
