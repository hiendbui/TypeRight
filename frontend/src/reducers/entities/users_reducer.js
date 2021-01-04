import { RECEIVE_ALL_USERS } from '../../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const initialState = {}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case RECEIVE_ALL_USERS:
        return action.users;
    case RECEIVE_CURRENT_USER:
        return {...state, [action.currentUser.id]: action.currentUser}
    default:
        return state;
  }
}

export default usersReducer