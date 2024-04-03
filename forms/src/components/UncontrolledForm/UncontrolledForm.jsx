import React from "react";
import styles from "./UncontrolledForm.module.css";

class UncontrolledForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;

    console.log(login);
    console.log(password);
  };

  render() {
    console.log("Render...");
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input type="text" name="login" placeholder="Login" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default UncontrolledForm;
