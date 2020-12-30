import axios from 'axios';

export const fetchLatestTests = () => {
    return axios.get('api/tests')
};

export const fetchRandomTest = () => {
    return axios.get('api/tests/random')
};

export const postTest = test => {
    return axios.post('api/tests', test)
};

export const fetchTest = id => {
    return axios.get(`api/tests/${id}`)
};

export const deleteTest = id => {
    return axios.delete(`api/tests/${id}`);
};

export const updateTest = (id, test) => {
    return axios.patch(`api/tests/${id}`, test)
};