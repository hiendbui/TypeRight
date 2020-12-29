// src/components/nav/navbar_container.js

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import {
    logout,
    login,
    signup,
    clearSessionErrors } from '../../actions/session_actions'

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  openModal: modal => dispatch(openModal(modal))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);