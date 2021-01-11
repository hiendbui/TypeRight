import {
  RECEIVE_TEST_ERRORS,
  RECEIVE_TEST,
  CLEAR_TEST_ERRORS
} from '../../actions/test_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEST_ERRORS:
      return Object.values(action.errors);
    case RECEIVE_TEST:
      return _nullErrors;
    case CLEAR_TEST_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;