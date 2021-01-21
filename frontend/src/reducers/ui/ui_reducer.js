import { combineReducers } from 'redux';

import modals from './modal_reducers';
import welcome from './welcome_text_reducer';

export default combineReducers({
  modals,
  welcome
});