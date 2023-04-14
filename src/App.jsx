import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function deleteTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateCheck(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const tasksCompleted = tasks.filter((t) => t.done).length;
  const tasksTotal = tasks.length;
  const percentage = (tasksCompleted / tasksTotal) * 100;

  function getMessage() {
    if (percentage === 0) {
      return "Try to do at least one!";
    }
    if (percentage === 100) {
      return "Nice job!";
    }
    return "Keep going, you can do it!";
  }

  return (
    <main>
      <h1>
        Completed {tasksCompleted}/{tasksTotal}
      </h1>
      <h2>{getMessage()}</h2>
      <Form onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          {...task}
          onDelete={() => deleteTask(index)}
          onToggle={(done) => updateCheck(index, done)}
        />
      ))}
    </main>
  );
}

export default App;
