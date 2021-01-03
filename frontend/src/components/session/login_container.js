import React from 'react';
import { connect } from "react-redux";
import { login, clearSessionErrors } from '../../actions/session_actions';
import { openSessionModal, closeSessionModal } from '../../actions/modal_actions';
import SessionForm from './session_form'

const msp = state => ({
    errors: state.errors.session,
    formType: 'Log In'
})

const mdp = dispatch => ({
    processForm: formUser => dispatch(login(formUser)),
    loginDemoUser: demoUser => dispatch(login(demoUser)),
    otherForm: (
        <button onClick={() => { dispatch(openSessionModal('Sign Up')); dispatch(clearSessionErrors()); }}>Sign Up</button>
    ),
    closeSessionModal: () => dispatch(closeSessionModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(msp, mdp)(SessionForm);