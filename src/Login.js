import React, { Component } from 'react';

class Login extends React.Component {
  render() {
    return (
        <div>
          <h3 className="section-header">
            Login
          </h3>

          <form className="frmlogin">
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <input type="submit" value="Log In" />
          </form>
        </div>

    )
  }
}

export default Login;
