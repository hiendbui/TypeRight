import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginContainer from "./login_container";
import SignupContainer from "./signup_container";
import "./modal.scss"

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;

  }
  let component;
  switch (modal) {
    case "Log In":
      component = <LoginContainer />;
      break;
    case "Sign Up":
      component = <SignupContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const msp = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(Modal);
