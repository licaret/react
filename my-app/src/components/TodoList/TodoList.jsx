import React, { Component } from "react";
import styles from "./TodoList.module.css";

const FILTER_TYPE = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "Uda Plante", isCompleted: true },
        { id: 2, text: "Hraneste Cainele si Pisica", isCompleted: false },
        { id: 3, text: "Scoate afara gunoiul", isCompleted: true },
        { id: 4, text: "Aspira", isCompleted: false },
      ],
      newTodo: "",
      filter: FILTER_TYPE.ALL,
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

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  filterTodos = () => {
    const { todos, filter } = this.state;
    switch (filter) {
      case FILTER_TYPE.COMPLETED:
        return todos.filter((todo) => todo.isCompleted);
      case FILTER_TYPE.ACTIVE:
        return todos.filter((todo) => !todo.isCompleted);
      default:
        return todos;
    }
  };

  render() {
    const filteredTodos = this.filterTodos();
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

        <select
          name="filter"
          value={this.state.filter}
          onChange={this.handleFilterChange}
        >
          <option value={FILTER_TYPE.ALL}>All</option>
          <option value={FILTER_TYPE.ACTIVE}>Active</option>
          <option value={FILTER_TYPE.COMPLETED}>Completed</option>
        </select>

        {filteredTodos.map((todo) =>
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
