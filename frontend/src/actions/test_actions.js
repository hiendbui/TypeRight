import * as TestAPIUtil from '../util/test_api_util';

export const RECEIVE_LATEST_TESTS = 'RECEIVE_LATEST_TESTS';
export const RECEIVE_RANDOM_TEST = 'RECEIVE_RANDOM_TEST';

const receiveLatestTests = tests => ({
    type: RECEIVE_LATEST_TESTS,
    tests
});

const receiveRandomTest = test => ({
    type: RECEIVE_RANDOM_TEST,
    test
})

export const fetchLatestTests = () => dispatch => {
    return TestAPIUtil.fetchLatestTests
        .then(tests => dispatch(receiveLatestTests(tests.data)))
}

export const fetchRandomTest = () => dispatch => {
    return TestAPIUtil.fetchRandomTest
        .then(test => dispatch(receiveRandomTest(test)))
}