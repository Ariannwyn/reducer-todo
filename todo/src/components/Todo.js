import React from "react";
import moment from "moment";

const Todo = (props) => {
  console.log("todo props", props);
  const time = moment().format("LT");

  return (
    <div className="task">
      <p
        onClick={() =>
          props.dispatch({
            type: "TOGGLE_TODO",
            payload: { id: props.task.id },
          })
        }
        className={`${props.task.completed ? "completed" : ""}`}
      >
        {props.task.task}
      </p>
      <p className={`${props.task.completed ? "timeOn" : "timeOff"}`}>
        {"Completed at " + time}
      </p>
      <button
        className="clear-btn"
        onClick={() =>
          props.dispatch({
            type: "CLEAR_TODO",
            payload: { id: props.task.id },
          })
        }
      >
        Clear Task
      </button>
    </div>
  );
};

export default Todo;
