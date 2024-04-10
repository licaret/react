import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
      isHidden: false
    };
  }

  // Called after a component is mounted
  componentDidMount() {
    console.log("Component Did Mount");
  }

  // Called before a mounted component receives new props or state
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update");

    const { message } = nextState;
    if (message.endsWith("+")) {
      return false;
    }
    return true;
  }

  // Called immediately before rendering when new props or state are being received
  componentWillUpdate(nextProps, nextState) {
    console.log("Component Will Update");
  }

  // Called immediately after updating occurs
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
  }

  // Called immediately before a component is destroyed
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  handleButtonClick = () => {
    const character = this.state.message.endsWith("+") ? "-" : "+";
    this.setState({ message: `${this.state.message}${character}` });
  };

  handleHideCounterButton = () => this.setState({ isHidden: !this.state.isHidden });

  render() {
    const { isHidden } = this.state;
    return (
      <>
        {/* <div>{this.state.message}</div>
        <button onClick={this.handleButtonClick}>Press Me</button> */}
        {!isHidden && <Counter />}
        <button onClick={this.handleHideCounterButton}>Hide Counter Component</button>
      </>
    );
  }
}

export default App;
