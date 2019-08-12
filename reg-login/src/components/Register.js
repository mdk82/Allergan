import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobilePhone: '',
      username: '',
      password: '',
      isRegistered: false,
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
    const {
      firstName,
      lastName,
      email,
      mobilePhone,
      password,
      username,
    } = this.state;
    event.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      mobilePhone,
      password,
      username,
    };

    if (this.validatation()) {
      fetch('https://iywc8fxtz0.execute-api.us-east-1.amazonaws.com/dev/user', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(data),
      })
        .then(result => {
          if (result.status === 200) {
            this.setState({ isRegistered: true });
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
    const {
      firstName,
      lastName,
      email,
      mobilePhone,
      password,
      username,
    } = this.state;
    return (
      email.length > 0 &&
      password.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      username.length > 0 &&
      mobilePhone.length > 0
    );
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      mobilePhone,
      password,
      username,
      isRegistered,
      responseMessage,
      validatationError,
    } = this.state;
    return (
      <div>
        <div className="ui padded grid container segment">
          <form onSubmit={this.onSubmit} className="ui form">
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={this.onChange}
              ></input>
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={this.onChange}
              ></input>
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.onChange}
              ></input>
            </div>
            <div className="field">
              <label>Mobile Phone</label>
              <input
                type="text"
                name="mobilePhone"
                placeholder="Mobile Phone"
                value={mobilePhone}
                onChange={this.onChange}
              ></input>
            </div>
            <div className="field">
              <label>User Name</label>
              <input
                type="text"
                name="username"
                placeholder="User Name"
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
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" tabIndex="0" className="hidden"></input>
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div>
            <div>
              <button className="ui button" type="submit">
                Register
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
          {isRegistered && (
            <div className="ui warning message">Successfully Registered</div>
          )}
        </div>
      </div>
    );
  }
}

export default Register;
