import React from "react";
import styles from "./ControlledForm.module.css";

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      hasErrorLogin: false,
      pass: "",
    };
  }

  handleLoginChange = (event) => {
    const login = event.target.value;
    this.setState({ login, hasErrorLogin: login.length < 5 });
  };

  handlePassChange = (event) => {
    this.setState({ pass: event.target.value });
  };

  render() {
    const { login, pass, hasErrorLogin } = this.state;
    console.log("Render...");
    return (
      <form className={styles.form}>
        <input
          type="text"
          name="login"
          value={login}
          onChange={this.handleLoginChange}
          placeholder="Login"
          className={hasErrorLogin ? styles.errorField : styles.field}
        />
        <input
          type="password"
          name="password"
          value={pass}
          onChange={this.handlePassChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default ControlledForm;
