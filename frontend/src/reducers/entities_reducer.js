import { combineReducers } from 'redux';
import tests from './tests_reducer';

const EntitiesReducer = combineReducers({
  tests,
});

export default EntitiesReducer;