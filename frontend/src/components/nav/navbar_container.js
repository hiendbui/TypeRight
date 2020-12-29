// src/components/nav/navbar_container.js

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import {
    logout,
    login,
    signup,
    clearErrors } from '../../actions/session_actions'

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout },
)(NavBar);