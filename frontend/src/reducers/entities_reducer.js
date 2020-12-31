import { combineReducers } from 'redux';
import tests from './tests_reducer';
import users from './users_reducer';
import attempts from './attempts_reducer';

const EntitiesReducer = combineReducers({
  users,
  tests,
  attempts
});

export default EntitiesReducer;