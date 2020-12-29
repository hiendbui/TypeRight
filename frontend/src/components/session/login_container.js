import React from 'react';
import { connect } from "react-redux";
import { login, clearSessionErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form'

const msp = state => ({
    errors: state.errors.session,
    formType: 'Log In'
})

const mdp = dispatch => ({
    processForm: formUser => dispatch(login(formUser)),
    loginDemoUser: demoUser => dispatch(login(demoUser)),
    otherForm: (
        <button onClick={() => { dispatch(openModal('Sign Up')); dispatch(clearSessionErrors()); }}>Sign Up</button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(msp, mdp)(SessionForm);