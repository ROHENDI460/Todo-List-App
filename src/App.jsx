import { useReducer } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  // const [todoList, setTodoList] = useState([]);
  // const [form, setForm] = useState({
  //   todo: "",
  //   status: false,
  // });

  // const resetInput = () => {
  //   setForm({
  //     todo: "",
  //     status: false,
  //   });
  // };

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     todo: e.target.value,
  //     status: false,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (form.index || form.index === 0) {
  //     const newTodo = todoList.map((e, i) => {
  //       if (i === form.index) {
  //         return form;
  //       } else {
  //         return e;
  //       }
  //     });
  //     setTodoList(newTodo);
  //   } else {
  //     setTodoList([...todoList, form]);
  //   }
  //   resetInput();
  // };

  // const handleCheck = (index) => {
  //   const newTodo = todoList.map((e, i) => {
  //     if (i === index) {
  //       return {
  //         todo: e.todo,
  //         status: true,
  //       };
  //     } else {
  //       return e;
  //     }
  //   });
  //   setTodoList(newTodo);
  // };

  // const handleDelete = (index) => {
  //   const newTodo = todoList.filter((e, i) => {
  //     if (i !== index) {
  //       return e;
  //     }
  //   });
  //   setTodoList(newTodo);
  // };

  // const handleEdit = (index) => {
  //   const detailTodo = {
  //     index,
  //     ...todoList[index],
  //   };
  //   setForm(detailTodo);
  // };
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <div className="input col-12 d-flex flex-column justify-content-center p-5">
        <h1 className="text-warning">What's the plan for today?</h1>
        <div className="form col-8 col-sm-7 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center border bg-white p-3 mt-4">
          <AddTodo onAddTask={handleAddTask} />
        </div>
      </div>

      <div className="content d-flex flex-column justify-content-center align-items-center p-3">
        <TodoList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
      </div>
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Membersikan Kamar", done: true },
  { id: 1, text: "Sarapan Pagi", done: false },
  { id: 2, text: "Belajar Ngoding", done: false },
];
