import React from "react";
import { connect } from "react-redux";
import { addTodos, deleteTodos, editTodos, isDoneTodos } from "../redux/reducers/reducer";
import { useState } from "react";
import AddTodo from "./AddTodo";
import App from "../App";

const mapStateToProps = (state) => {
  return {
    todo: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    deleteTodo: (id) => dispatch(deleteTodos(id)),
    editTodo: (obj) => dispatch(editTodos(obj)),
    isDoneTodo: (id) => dispatch(isDoneTodos(id)),
  };
};

const FilterTodo = (props) => {
  const [sort, setSort] = useState("aktive");
  return (
    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
      <div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 py-3 btn-filter d-flex justify-content-around bg-danger">
        <button className="btn-all" onClick={() => setSort("all")}>
          All
        </button>
        <button className="btn-active" onClick={() => setSort("active")}>
          Active
        </button>
        <button className="btn-complete" onClick={() => setSort("completed")}>
          Completed
        </button>
      </div>

      <div className="col-4 mt-3 d-flex flex-column  align-items-center">
        {props.todo.length > 0 && sort === "active"
          ? props.todo.map((item) => {
              return item.isDone === false && <AddTodo key={item.id} item={item} deleteTodo={props.deleteTodo} editTodo={props.editTodo} isDoneTodo={props.isDoneTodo} />;
            })
          : null}
        {/* for completed items */}
        {props.todo.length > 0 && sort === "completed"
          ? props.todo.map((item) => {
              return item.isDone === true && <AddTodo key={item.id} item={item} deleteTodo={props.deleteTodo} editTodo={props.editTodo} isDoneTodo={props.isDoneTodo} />;
            })
          : null}
        {/* for all items */}
        {props.todo.length > 0 && sort === "all"
          ? props.todo.map((item) => {
              return <AddTodo key={item.id} item={item} deleteTodo={props.deleteTodo} editTodo={props.editTodo} isDoneTodo={props.isDoneTodo} />;
            })
          : null}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo);
