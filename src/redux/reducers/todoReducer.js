// import { useReducer } from "react";
// import TodoList from "../../components/TodoList.jsx";

// export const ADD_TODO = "ADD_TODO";

// export function addTodo(text) {
//   dispatch({
//     type: "ADD_TODO",
//     id: nextId++,
//     text: text,
//   });
// }

// function editTodo(task) {
//   dispatch({
//     type: "EDIT_TODO",
//     task: task,
//   });
// }

// function deleteTodo(taskId) {
//   dispatch({
//     type: "DELETE_TODO",
//     id: taskId,
//   });
// }

// export function todoReducer(tasks, action) {
//   switch (action.type) {
//     case "ADD_TODO": {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case "EDIT_TODO": {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case "DELETE_TODO": {
//       return tasks.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// let nextId = 3;
// const initialState = [
//   { id: 0, text: "Membersikan Kosan", isDone: true },
//   { id: 1, text: "Memasak Lauk Makan", isDone: false },
//   { id: 2, text: "Belajar Ngoding", IsDone: false },
// ];
