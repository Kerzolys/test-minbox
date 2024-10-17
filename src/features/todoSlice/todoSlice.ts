import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TTodo, TTodoList } from "../../utils/types";
import { RootState } from "../../store/store";
import { tempTodos } from "../../constants/tempTodos";

type TodosState = {
  todos: TTodoList;
  filteredTodos: TTodoList;
  loading: boolean;
  error: string | null;
};

export const initialState: TodosState = {
  todos: tempTodos,
  filteredTodos: tempTodos,
  loading: false,
  error: null,
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push(action.payload);
      state.filteredTodos = state.todos;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.filteredTodos = state.todos;
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      state.filteredTodos = state.todos;
    },
    editTodo: (state, action: PayloadAction<TTodo>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.todo = action.payload.todo;
      }
      state.filteredTodos = state.todos;
    },

    filterTodos: (state, action: PayloadAction<boolean | null>) => {
      if (action.payload === null) {
        state.filteredTodos = state.todos;
      } else {
        state.filteredTodos = state.todos.filter(
          (todo) => todo.completed === action.payload
        );
      }
    },
    resetCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
      state.filteredTodos = state.todos;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  filterTodos,
  resetCompletedTodos,
} = todoSlice.actions;
export const todoSelector = (state: RootState) => state.todos;
export default todoSlice.reducer;
