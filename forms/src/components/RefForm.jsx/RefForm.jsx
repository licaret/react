import React, { Component, createRef } from "react";
import styles from "./RefForm.module.css";

class RefForm extends Component {
  constructor(props) {
    super(props);
    this.loginRef = createRef();
    this.passRef = createRef();
  }

  handleLoginChange = () => {
    const loginElement = this.loginRef.current;
    console.log(loginElement.value);
  }

  handlePassChange = () => {
    const passElement = this.passRef.current;
    console.log(passElement.value);
  }

  render() {
    console.log("Render...");
    return (
      <form className={styles.form}>
        <input
          type="text"
          name="login"
          placeholder="Login"
          ref={this.loginRef}
          onChange={this.handleLoginChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={this.passRef}
          onChange={this.handlePassChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default RefForm;
