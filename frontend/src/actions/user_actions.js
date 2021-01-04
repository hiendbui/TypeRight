import * as UserAPIUtil from '../util/user_api_util';
import { fetchTestAttempts } from './attempt_actions';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

const receiveAllUsers = users => ({
    type: 'RECEIVE_ALL_USERS',
    users
})

export const fetchAllUsers = (currentTest) => dispatch => {
    return UserAPIUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users.data)))
        .then(() => dispatch(fetchTestAttempts(currentTest)))
};