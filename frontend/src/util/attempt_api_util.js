import axios from 'axios';

export const createAttempt = attempt => {
    return axios.post('api/attempts/', attempt)
};

export const fetchUserAttempts = userId => {
    return axios.get(`api/attempts/users/${userId}`)
};

export const fetchTestAttempts = testId => {
    return axios.get(`api/attempts/tests/${testId}`)
};

export const fetchUserTestAttempts = (userId, testId) => {
    return axios.get(`api/attempts/${userId}/${testId}`)
};