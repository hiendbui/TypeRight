import React from 'react';
import { connect } from 'react-redux'
import LibraryContainer from '../library/library_container';
import CreateTest from "./create_test";
import TypingContainer from "../typing/typing_container";
import { fetchRandomTest } from "../../actions/test_actions";
import { closeWelcomeText } from "../../actions/ui_actions";
import { Link } from 'react-router-dom';
import WelcomeText from './welcome-text';
import "./main_page.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loaded: false}
  }
  componentDidMount(){
    this.props.fetchRandomTest()
      .then(() => this.setState({loaded: true}))
  }
  render() {
    return (
      <div className="main-wrapper-component">
        <WelcomeText show={this.props.showWelcome} close={this.props.closeWelcomeText}/>
        {this.state.loaded && <TypingContainer/>}
        <LibraryContainer/>
        <CreateTest/>
        <footer>
          <Link to="/about">
            <span className="footer">Created by Anthony Bologna, Hien Bui, Josh Bubar, and Lawrence Nguyen &copy; 2020</span>
          </Link>
        </footer>
      </div>
    );
  }
}

const msp = state => ({
  test: state.entities.tests[state.entities.tests.current],
  showWelcome: state.ui.welcome && !state.session.isAuthenticated
});

const mdp = (dispatch) => ({
  fetchRandomTest: () => dispatch(fetchRandomTest()),
  closeWelcomeText: () => dispatch(closeWelcomeText()),
});

export default connect(msp, mdp)(MainPage);