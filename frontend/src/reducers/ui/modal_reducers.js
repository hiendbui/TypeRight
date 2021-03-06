import { combineReducers } from 'redux';
import session from './session_modal_reducer';
import testForm from './test_modal_reducer';
import attempt from './attempt_modal_reducer';

const ModalReducer = combineReducers({
    session,
    testForm,
    attempt
})

export default ModalReducer