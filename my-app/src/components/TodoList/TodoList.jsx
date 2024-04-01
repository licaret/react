import React, { Component } from "react";
import styles from "./TodoList.module.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "Uda Plante", isCompleted: true },
        { id: 2, text: "Hraneste Cainele si Pisica", isCompleted: false },
      ],
      newTodo: "",
    };
  }

  handleAddTodo = () => {
    if (this.state.newTodo.trim() !== "") {
      const newTodoItem = {
        id: Date.now(),
        text: this.state.newTodo,
        isCompleted: false,
      };

      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodoItem],
        newTodo: "",
      }));

      console.log(this.state);
    }
  };

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleToggleTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div className={styles.container}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
            placeholder="Enter a new todo item"
          />
          <button onClick={this.handleAddTodo}>Add Todo Item</button>
        </div>
        {this.state.todos.map((todo) =>
            todo.isCompleted ? (
              <h3
                key={todo.id}
                onClick={() => this.handleToggleTodo(todo.id)}
                className={styles.completedItem}
              >
                {todo.text}
              </h3>
            ) : (
              <h3 key={todo.id} onClick={() => this.handleToggleTodo(todo.id)}>
                {todo.text}
              </h3>
            )
          )}
      </div>
    );
  }
}

export default TodoList;
