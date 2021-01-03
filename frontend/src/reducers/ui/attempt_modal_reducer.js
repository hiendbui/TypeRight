import { OPEN_ATTEMPT_MODAL, CLOSE_ATTEMPT_MODAL } from "../../actions/modal_actions";

export default function AttemptModalReducer(oldState = null, action) {
  switch (action.type) {
    case OPEN_ATTEMPT_MODAL:
      return Boolean(action.data);
    case CLOSE_ATTEMPT_MODAL:
      return null;
    default:
      return oldState;
  }
}