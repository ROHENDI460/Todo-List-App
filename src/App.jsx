import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [form, setForm] = useState({
    todo: "",
    status: false,
  });

  const resetInput = () => {
    setForm({
      todo: "",
      status: false,
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      todo: e.target.value,
      status: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.index || form.index === 0) {
      const newTodo = todoList.map((e, i) => {
        if (i === form.index) {
          return form;
        } else {
          return e;
        }
      });
      setTodoList(newTodo);
    } else {
      setTodoList([...todoList, form]);
    }
    resetInput();
  };

  const handleCheck = (index) => {
    const newTodo = todoList.map((e, i) => {
      if (i === index) {
        return {
          todo: e.todo,
          status: true,
        };
      } else {
        return e;
      }
    });
    setTodoList(newTodo);
  };

  const handleDelete = (index) => {
    const newTodo = todoList.filter((e, i) => {
      if (i !== index) {
        return e;
      }
    });
    setTodoList(newTodo);
  };

  const handleEdit = (index) => {
    const detailTodo = {
      index,
      ...todoList[index],
    };
    setForm(detailTodo);
  };

  return (
    <>
      <div className="input col-12 d-flex flex-column justify-content-center p-5">
        <h1 className="text-warning">What's the plan for today?</h1>
        <form className="col-8 col-sm-7 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center border bg-white p-3 mt-4" method="post" onSubmit={handleSubmit}>
          <input type="text" name="todo" value={form.todo} onChange={handleChange} placeholder="What to do" className="px-2" />
          <button type="submit" className="">
            Add
          </button>
        </form>
      </div>

      <div className="content d-flex flex-column justify-content-center align-items-center p-3">
        {todoList.map((e, i) => (
          <div key={i} className="col-4 card d-flex flex-row p-2 m-2 align-items-center">
            <div className="action px-2">
              <input type="checkbox" name="" id="" />
            </div>
            <div className="text">{e.todo}</div>
            <div className="btn-action d-flex justify-content-end">
              <button className="btn-edit" onClick={() => handleEdit(i)}>
                <AiOutlineEdit />
              </button>
              <button className="btn-delete" onClick={() => handleDelete(i)}>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
