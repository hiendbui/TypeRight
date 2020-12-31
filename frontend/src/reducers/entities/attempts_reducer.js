import {
    RECEIVE_ATTEMPTS, 
    RECEIVE_SINGLE_ATTEMPT
} from '../../actions/attempt_actions';

const initialState = {}

const attemptsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ATTEMPTS:
        return action.attempts;
    case RECEIVE_SINGLE_ATTEMPT:
        return {...state, ...action.attempt}
    default:
        return state;
  }
}

export default attemptsReducer;