import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/index";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

function App() {
  const [taskText, setTaskText] = useState("");
  const [todos, dispatch] = useReducer(reducer, initialState);
  console.log(todos);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { taskText: taskText } });
    setTaskText("");
  }

  return (
    <div>
      <h2>Welcome to your todo list!</h2>
      <img
        src="https://docs.juliaebert.com/assets/img/undraw_to_do_list_a49b.svg"
        alt=""
        style={{ width: "300px" }}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </form>
      {!todos.completed ? (
        <TodoList todos={todos} dispatch={dispatch} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
