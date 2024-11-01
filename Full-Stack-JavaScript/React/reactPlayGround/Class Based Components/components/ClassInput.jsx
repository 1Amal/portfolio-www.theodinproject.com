/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Count from './Count'

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "Add a Task",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
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
        <Count TodoCount={this.state.todos.length}/>
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
              {todo}{" "}
              <button
                type="button"
                id={todo}
                onClick={() => this.deleteButton(todo)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
