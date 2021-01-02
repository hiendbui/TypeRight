import {
  OPEN_TEST_MODAL,
  CLOSE_TEST_MODAL,
} from "../../actions/modal_actions";

export default function TestModalReducer(oldState = null, action) {
  switch (action.type) {
    case OPEN_TEST_MODAL:
      return action.modal;
    case CLOSE_TEST_MODAL:
      return null;
    default:
      return oldState;
  }
}
