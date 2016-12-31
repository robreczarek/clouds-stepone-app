import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.email = event.target.email;
  }
  render() {
    return (
        <div className="loginBox">
          <h3 className="section-header">
            Login
          </h3>

          <form className="frmlogin" onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <input type="submit" value="Log in" />
          </form>
        </div>

    )
  }
}

export default Login;
