import { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducers/reducer";
import "./style.css";

let nextId = 4;

const mapStateToProps = (state) => {
  return {
    todo: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const TodoList = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  // console.log(props);

  const add = () => {
    props.addTodo({
      id: nextId++,
      text: todo,
      isDone: false,
    });
    setTodo("");
  };

  return (
    <>
      <div className="input col-12 d-flex flex-column justify-content-center p-5">
        <h1 className="text-warning">What's the plan for today?</h1>
        <div className="form col-8 col-sm-7 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center border bg-white p-3 mt-4">
          <input className="px-2" placeholder="What to do" onChange={(e) => handleChange(e)} />
          <button className="btn-add" onClick={() => add()} method="post">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
