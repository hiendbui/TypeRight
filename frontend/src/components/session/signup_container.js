import React from 'react';
import { connect } from "react-redux";
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import { openSessionModal, closeSessionModal } from '../../actions/modal_actions';
import SessionForm from './session_form'

const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign Up',
})

const mdp = dispatch => ({
    processForm: formUser => dispatch(signup(formUser)),
    loginDemoUser: demoUser => dispatch(login(demoUser)),
    otherForm: (
        <button onClick={() => { dispatch(openSessionModal('Log In')); dispatch(clearSessionErrors()); }}>Log In</button>
    ),
    closeSessionModal: () => dispatch(closeSessionModal())
});

export default connect(msp, mdp)(SessionForm);