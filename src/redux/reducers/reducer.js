import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // { id: 0, text: "Membersikan Kosan", isDone: true },
  // { id: 1, text: "Memasak Lauk Makan", isDone: false },
  // { id: 2, text: "Belajar Ngoding", isDone: false },
];

export const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Add todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    // Delete todos
    deleteTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // Edit todos
    editTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.text,
          };
        }
        return todo;
      });
    },
    // Complete todo
    isDoneTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, deleteTodos, editTodos, isDoneTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;

// import { useReducer } from "react";
// import TodoList from "../../components/TodoList";

// const initialState = [
//   { id: 0, text: "Membersikan Kosan", done: true },
//   { id: 1, text: "Memasak Lauk Makan", done: false },
//   { id: 2, text: "Belajar Ngoding", done: false },
// ];

// export function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     // case ADD_TODO:
//     //   return {
//     //     todos: [...state.todos, action.payload],
//     //   };
//     default:
//       return state;
//   }
// }

// let nextId = 3;
