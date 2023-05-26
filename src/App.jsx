import "../src/components/style.css";
import FilterTodo from "./components/FilterTodo";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <>
      <TodoList />
      <FilterTodo />
    </>
  );
}
