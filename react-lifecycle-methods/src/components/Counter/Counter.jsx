import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.abortController = new AbortController();
    const { signal } = this.abortController;

    fetch("https://jsonplaceholder.typicode.com/posts/1", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok!");
        }
        return res.json();
      })
      .then((data) => this.setState({ count: data.id, isLoading: false }))
      .catch((error) => {
        this.setState({ error, isLoading: false });
      });
  }

  componentWillUnmount() {
    if (this.abortController) {
      this.abortController.abort();
    }
  }

  handleIncrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count, isLoading, error } = this.state;

    if (error) {
      return <h3>Error: {error.message}</h3>;
    }

    if (isLoading) {
      return <h3>Loading...</h3>;
    }

    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={this.handleIncrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
