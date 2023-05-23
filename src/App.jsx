import { useState } from "react";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [form, setForm] = useState({
    todo: "",
  });

  return (
    <>
      <div className="input col-12 d-flex flex-column justify-content-center p-5">
        <h1 className="text-warning">What's the plan for today?</h1>
        <form action="" className="col-8 col-sm-7 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center border bg-white p-3 mt-4">
          <input type="text" placeholder="What to do" name="todo" className="px-2" />
          <button type="submit" className="">
            Add
          </button>
        </form>
      </div>

      <div className="content d-flex justify-content-center p-3">
        <div className="col-4 card d-flex flex-row p-3">
          <div className="action px-2">
            <input type="checkbox" name="" id="" />
          </div>
          <div className="text">List</div>
        </div>
      </div>
    </>
  );
}

export default App;
