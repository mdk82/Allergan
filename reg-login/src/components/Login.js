import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = event => {
    const { username, password } = this.state;
    event.preventDefault();
    axios
      .get(
        `https://iywc8fxtz0.execute-api.us-east-1.amazonaws.com/dev/user/${username}/${password}`
      )
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
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
    );
  }
}

export default Login;
