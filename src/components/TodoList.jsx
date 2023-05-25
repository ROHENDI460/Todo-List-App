import { useState } from "react";
import "./style.css";

import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

export default function TodoList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <div className="col-9 col-sm-6 col-lg-4">
      {tasks.map((task) => (
        <div key={task.id} className="card d-flex flex-row p-2 my-4 align-items-center">
          <div className="action d-flex flex-column px-2 pt-2">
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="col-9 mx-1"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button className="btn-save mx-2" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <div className="d-flex flex-row ">
        <div className="col-10 p-0">{task.text}</div>
        <button className="btn-edit mx-2" onClick={() => setIsEditing(true)}>
          <AiOutlineEdit />
        </button>
      </div>
    );
  }
  return (
    <label className="d-flex flex-row">
      <input
        className="mx-1 d-flex"
        type="checkbox"
        checked={task.done}
        // value={task.text}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
            // style: (textDecoration = "line-through"),
          });
        }}
      />
      <div className="col-10 p-0" style={task.done ? { textDecoration: "line-through" } : {}}>
        {taskContent}
      </div>
      <button className="btn-delete " onClick={() => onDelete(task.id)}>
        <AiOutlineDelete />
      </button>
    </label>
  );
}
