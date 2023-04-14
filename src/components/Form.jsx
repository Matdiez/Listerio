import { useState } from "react";

export default function Form({ onAdd }) {
  const [task, setTask] = useState("");
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={task}
        onChange={(ev) => setTask(ev.target.value)}
        placeholder="New Task"
        required
      />
    </form>
  );
}
