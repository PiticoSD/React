import { useState, useEffect } from "react";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

function MyProject() {
  const [fact, setFact] = useState("");
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.isCompleted).length;
  const notCompleted = tasks.filter((t) => !t.isCompleted).length;

  function toggleFavorite(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
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
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div
      className={`min-h-screen p-7 flex justify-center transition-all duration-500 ${
        theme === "light" ? "bg-slate-300 " : "bg-slate-900 "
      }`}
    >
      <div className="text-center space-y-2">
        <h1
          className={`text-4xl ${
            theme === "light" ? "text-slate-800" : "text-slate-300"
          }`}
        >
          TASK MANAGER
        </h1>
        <button
          className="text-2xl bg-slate-400 rounded-md p-2 mb-4"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

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
