import {
  RECEIVE_TEST_ERRORS,
  RECEIVE_TEST
} from '../../actions/test_actions';
import { CLOSE_TEST_MODAL } from "../../actions/modal_actions";

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEST_ERRORS:
      return Object.values(action.errors);
    case RECEIVE_TEST:
      return _nullErrors;
    case CLOSE_TEST_MODAL:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;