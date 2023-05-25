import { useState } from "react";
import "./style.css";

export default function AddTodo({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <>
      <input className="px-2" placeholder="What to do" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        className="btn-add"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
        method="post"
      >
        Add
      </button>
    </>
  );
}
