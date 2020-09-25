export const initialState = [
  {
    task: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const reducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, newTodo(action.payload.taskText)];
    case "TOGGLE_TODO":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case "CLEAR_TODO":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

function newTodo(taskText) {
  return { task: taskText, completed: false, id: Date.now() };
}
