import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="navRight">
                    <Link to={'/library'}>Library</Link>
                    <Link to={'/profile'}>Profile</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="navRight">
                    <button className="sessionbutton" id="login" onClick={() => { this.props.clearSessionErrors(); this.props.openSessionModal('Log In'); }}>Log In</button>
                    <button className="sessionbutton" id="signup" onClick={() => { this.props.clearSessionErrors(); this.props.openSessionModal('Sign Up'); }}>Sign Up</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="navbar">
                <h1>TypeRight</h1>
                { this.getLinks() }
            </div>
        );
    }
}

export default NavBar;