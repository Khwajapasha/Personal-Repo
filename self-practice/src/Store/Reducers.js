const initState = {
  todos: [
    { id: "12", todo: "Marketting", isComplete: false },
    { id: "123", todo: "Shoppping", isComplete: false },
    { id: "1234", todo: "Bying", isComplete: false },
    { id: "12345", todo: "Technical", isComplete: false },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      state = { ...state, todos: [...state.todos, action.todo] };
      break;
    case "DETELE_TODO":
      const todos = state.todos;
      const updatedTodos = todos.filter((todo) => todo.id !== action.id);
      state = {
        ...state,
        todos: updatedTodos,
      };
      break;
  }

  return state;
};
export default rootReducer;
