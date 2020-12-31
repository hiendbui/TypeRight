import * as AttemptAPIUtil from '../util/attempt_api_util';

export const RECEIVE_ATTEMPTS = 'RECEIVE_ATTEMPTS';
export const RECEIVE_SINGLE_ATTEMPT = 'RECEIVE_SINGLE_ATTEMPT';

const receiveAttempts = attempts => ({
    type: RECEIVE_ATTEMPTS,
    attempts
});

const receiveSingleAttempt = attempt => ({
    type: RECEIVE_SINGLE_ATTEMPT,
    attempt
});


export const createAttempt = attempt => dispatch => {
    return AttemptAPIUtil.createAttempt(attempt)
        .then(attempt => dispatch(receiveSingleAttempt(attempt.data)))
}

export const fetchUserAttempts = userId => dispatch => {
    return AttemptAPIUtil.fetchUserAttempts(userId)
        .then(attempts => dispatch(receiveAttempts(attempts.data)))
};

export const fetchTestAttempts = testId => dispatch => {
    return AttemptAPIUtil.fetchTestAttempts(testId)
        .then(attempts => dispatch(receiveAttempts(attempts.data)))
};

export const fetchUserTestAttempts = (userId, testId) => dispatch => {
    return AttemptAPIUtil.fetchUserTestAttempts(userId, testId)
        .then(attempts => dispatch(receiveAttempts(attempts.data)))
};
