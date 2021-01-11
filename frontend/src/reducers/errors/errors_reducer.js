import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import test from './test_errors_reducer';

export default combineReducers({
  session,
  test
});