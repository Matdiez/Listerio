import { useState } from "react";

export default function Form() {
  const [task, setTask] = useState("");

  return (
    <form>
      <button>+</button>
      <input type="text" value={task} onChange={ev => setTask(ev.target.value)} placeholder="New Task" />
    </form>
  );
}
