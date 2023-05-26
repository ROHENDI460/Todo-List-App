import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, text: "Mencuci Baju", isDone: true },
  { id: 1, text: "Memasak Lauk Makan", isDone: false },
  { id: 2, text: "Belajar Ngoding", isDone: true },
  { id: 3, text: "Tidur", isDone: false },
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
