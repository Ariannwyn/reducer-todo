import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  onChange = (e) => {
    this.setState({
      task: e.target.value,
    });
    console.log("onchange", this.state);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    // this.setState({
    //   task: "",
    // });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.onChange}
          placeholder="What's on your list?"
        />
        <br />
        <button type="submit">Add</button>
        <button className="clear-btn" onClick={this.props.clearTask}>
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
