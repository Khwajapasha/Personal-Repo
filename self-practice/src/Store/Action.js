export const addTodo = (todo) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TODO",
      todo: todo,
    });
  };
};
export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_TODO",
      id: id,
    });
  };
};
