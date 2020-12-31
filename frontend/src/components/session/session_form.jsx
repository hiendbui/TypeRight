import React from "react";
import "./session_form.scss"

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)

  }

  handleDemoUser(e) {
    e.preventDefault();
    const demoUser = { username: "DemoUser", password: "123456" };
    this.props.loginDemoUser(demoUser).then(this.props.closeSessionModal);
  }

  displayErrors() {
    if (this.props.errors.length === 0) return null;
    console.log(this.props.errors)
    return (
      <div className="session-errors">
        {this.props.errors.map((el, idx) => (
          <div key={idx}>{el}</div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="session-form">
        <div className="link-to-other">
          {this.props.formType === "Log In" ? (
            <div id="modalForm">
              <button id="selected-form">{this.props.formType}</button>
              <span className="spacer"/>
              <p>{this.props.otherForm}</p>
              <span className="spacer-fill-right"/>
            </div>
          ) : (
            <div id="modalForm">
              <p>{this.props.otherForm}</p><span className="spacer"/>
              <button id="selected-form-two">{this.props.formType}</button>
              <span className="spacer-fill-right"/>
            </div>
          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.displayErrors()}
          <div className="text-input-section">
            <label>
              <h4>Username</h4>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput("username")}
                />
            </label>
            <label>
              <h4>Password</h4>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
                id="password"
                />
            </label>
                {this.props.formType === "Sign Up" ? (
                  <label>
                    <h4>Password Confirmation</h4>
                    <input
                      type="password"
                      value={this.state.password2}
                      onChange={this.handleInput("password2")}
                    />
                  </label>
                ) : null}
          </div>
          <div className="session-buttons-container">
            <button onClick={this.handleDemoUser} className="sessionbutton">
              Demo User
            </button>
            <button className="sessionbutton">{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
