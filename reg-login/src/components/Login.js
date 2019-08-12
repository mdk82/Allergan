import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      responseMessage: '',
      validatationError: false,
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      validatationError: false,
      responseMessage: '',
    });
  };

  onSubmit = event => {
    const { username, password } = this.state;
    event.preventDefault();
    if (this.validatation()) {
      fetch(
        `https://iywc8fxtz0.execute-api.us-east-1.amazonaws.com/dev/user/${username}/${password}`
      )
        .then(result => {
          if (result.status === 200) {
            this.setState({ isLoggedIn: true });
            return;
          }
          return result.text();
        })
        .then(response => {
          this.setState({ responseMessage: response });
        });
    } else {
      this.setState({ validatationError: true });
    }
  };

  validatation() {
    const { username, password } = this.state;
    return username.length > 0 && password.length > 0;
  }

  render() {
    const {
      username,
      password,
      isLoggedIn,
      responseMessage,
      validatationError,
    } = this.state;
    return (
      <div>
        <div className="ui padded grid container segment">
          <form onSubmit={this.onSubmit} className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.onChange}
              ></input>
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.onChange}
              ></input>
            </div>
            <div>
              <button className="ui button" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
        <div>
          {validatationError && (
            <div className="ui warning message">All Fields Are Required.</div>
          )}
        </div>
        <div>
          {responseMessage && (
            <div className="ui warning message">{responseMessage}</div>
          )}
        </div>
        <div>
          {isLoggedIn && (
            <div className="ui warning message">Successfully Logged In</div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
