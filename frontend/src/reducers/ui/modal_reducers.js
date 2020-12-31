import { combineReducers } from 'redux';
import session from './session_modal_reducer';

const ModalReducer = combineReducers({
    session
})

export default ModalReducer