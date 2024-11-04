/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Count from "./Count";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.editButtonName = "Edit Task";
    this.toDoListIndexNo;

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "Add a Task",
    };

    this.editTaskContent = "Hello";

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.editButton = this.editButton.bind(this);
    this.editTask = this.editTask.bind(this);
    this.resubmitButtonClicked = this.resubmitButtonClicked.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  editButton(buttonID) {
    console.log("Edit Button Clicked: " + buttonID);
    this.toDoListIndexNo = this.state.todos.findIndex((checkForIndex) => {
      return checkForIndex === buttonID;
    });
    console.log(this.toDoListIndexNo);

    
    
    // this.setState(
    //   (editTaskContent) =>
    //     (this.editTaskContent = this.state.todos[this.toDoListIndexNo])
    // );

    console.log("EditTaskContent Value:" + this.editTaskContent);
    this.setState((editButtonName) => (this.editButtonName = "Resubmit"));
  }

  editTask(editTaskInput) {
    this.setState(
      () => (this.editTaskContent = editTaskInput.target.value)
    );
    console.log(this.editTaskContent )
  }

  resubmitButtonClicked(e) {
    e.preventDefault();
    let newArray = this.state.todos.splice(this.toDoListIndexNo, 1);
    this.setState((state) => ({ ...state, newArray }));
    console.log(this.state);

    this.setState(() => (this.editButtonName = "Edit Task"));
    console.log(this.state);
  }

  deleteButton(buttonID) {
    console.dir(buttonID);
    console.log(this.state);
    let toDoListIndexNo = this.state.todos.findIndex((checkForIndex) => {
      return checkForIndex === buttonID;
    });
    console.log(toDoListIndexNo);
    let newArray = this.state.todos.splice(toDoListIndexNo, 1);
    this.setState((state) => ({ ...state, newArray }));
    console.log(this.state);
  }

  render() {
    return (
      <section>
        <Count TodoCount={this.state.todos.length} />
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Task</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {this.editButtonName === "Edit Task" ? (
                <div>
                  {todo}{" "}
                  <button
                    type="button"
                    id={todo}
                    onClick={() => this.editButton(todo)}
                  >
                    {this.editButtonName}
                  </button>
                  <button
                    type="button"
                    id={todo}
                    onClick={() => this.deleteButton(todo)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <div>
                  <form onSubmit={this.resubmitButtonClicked}>
                    <label htmlFor="task-edit">{this.editTaskContent} </label>
                    <input
                      id={todo}
                      type="text"
                      name="task-edit"
                      value={this.editTaskContent} //{this.state.inputVal}
                      onChange={this.editTask}
                    />
                    <button
                      type="submit"
                      id={todo}
                      //onClick={() => this.resubmitButtonClicked()}
                    >
                      {this.editButtonName}
                    </button>
                  </form>
                </div>
              )}{" "}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
