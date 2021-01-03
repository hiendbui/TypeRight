import React from "react";
import { closeSessionModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginContainer from "./login_container";
import SignupContainer from "./signup_container";
import "./session_modal.scss"

function SessionModal({ modal, closeSessionModal }) {
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
    <div className="modal-background" onClick={closeSessionModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const msp = (state) => {
  return {
    modal: state.ui.modals.session,
  };
};

const mdp = (dispatch) => {
  return {
    closeSessionModal: () => dispatch(closeSessionModal()),
  };
};

export default connect(msp, mdp)(SessionModal);
