import todoReducer, {
  addTodo,
  editTodo,
  filterTodos,
  removeTodo,
  toggleTodo,
} from "./todoSlice";

describe("тестируем todoSlice", () => {
  const initialState = {
    todos: [],
    filteredTodos: [],
    loading: false,
    error: null,
  };
  const initialTestState = {
    todos: [
      { todo: "помыть пол", completed: false, id: 1 },
      { todo: "сделать тудуху", completed: true, id: 2 },
    ],
    filteredTodos: [
      { todo: "помыть пол", completed: false, id: 1 },
      { todo: "сделать тудуху", completed: true, id: 2 },
    ],
    loading: false,
    error: null,
  };
  describe("тестируем addTodo", () => {
    it("проверяем начальное состояние", () => {
      expect(todoReducer(initialState, { type: "unknown" })).toEqual(
        initialState
      );
    });
    it("проверяем добавление нового todo", () => {
      const newTodo = { todo: "помыть пол", completed: false, id: 1 };
      const newState = todoReducer(initialState, addTodo(newTodo));
      expect(newState.todos.length).toEqual(1);
      expect(newState.filteredTodos.length).toEqual(1);
      expect(newState.todos[0]).toMatchObject(newTodo);
    });
  });
  describe("тестируем removeTodo", () => {
    it("проверяем удаление todo", () => {
      const newState = todoReducer(initialTestState, removeTodo(1));
      expect(newState.todos.length).toEqual(1);
      expect(newState.filteredTodos.length).toEqual(1);
    });
  });
  describe("тестируем toggleTodo", () => {
    it("проверяем изменение статуса todo", () => {
      const newState = todoReducer(initialTestState, toggleTodo(1));
      const todo = newState.todos.find((todo) => todo.id === 1);
      if (todo) expect(todo.completed).toEqual(true);
    });
  });
  describe("тестируем editTodo", () => {
    it("проверяем изменение текста задачи", () => {
      const newTodo = { todo: "пропылесосить пол", completed: false, id: 1 };
      const newState = todoReducer(initialTestState, editTodo(newTodo));
      const todo = newState.todos.find((todo) => todo.id === 1);
      if (todo) expect(todo.todo).toEqual("пропылесосить пол");
    });
  });
  describe("тестируем filterTodos", () => {
    it("проверяем отображение только не завершенных todo", () => {
      const newState = todoReducer(initialTestState, filterTodos(false));
      // expect(newState.todos.length).toEqual(1);
      expect(newState.filteredTodos.length).toEqual(1);
      expect(newState.filteredTodos[0].completed).toEqual(false);
    });
  });
});
