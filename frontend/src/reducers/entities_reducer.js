import { combineReducers } from 'redux';
import tests from './tests_reducer';
import users from './users_reducer'

const EntitiesReducer = combineReducers({
  users,
  tests
});

export default EntitiesReducer;