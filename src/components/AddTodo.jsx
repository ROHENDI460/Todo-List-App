import "./style.css";
import React from "react";
import { useRef } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

const AddTodo = (props) => {
  const { item, editTodo, deleteTodo, isDoneTodo } = props;
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const handleEdit = (id, value, e) => {
    if (e.which === 13) {
      editTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <div className="">
      <div className="card mb-3 d-flex flex-row" key={item.id}>
        <input className="checkbox mx-3" type="checkbox" checked={item.isDone} onChange={(id) => isDoneTodo(item.id)} />
        <input className="textarea my-3" ref={inputRef} disabled={inputRef} style={item.isDone ? { textDecoration: "line-through" } : {}} defaultValue={item.text} onKeyPress={(e) => handleEdit(item.id, inputRef.current.value, e)} />
        <div className="btn-action mx-3 d-flex align-items-center">
          <button className="btn-edit" onClick={() => changeFocus()}>
            <AiOutlineEdit />
          </button>
          <button className="btn-delete" onClick={() => deleteTodo(item.id)}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
