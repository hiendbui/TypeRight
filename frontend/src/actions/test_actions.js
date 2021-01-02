import * as TestAPIUtil from '../util/test_api_util';

export const RECEIVE_LATEST_TESTS = 'RECEIVE_LATEST_TESTS';
export const RECEIVE_TEST = 'RECEIVE_TEST';
export const REMOVE_TEST = 'REMOVE_TEST';

const receiveLatestTests = tests => ({
    type: RECEIVE_LATEST_TESTS,
    tests
});

const receiveTest = test => ({
    type: RECEIVE_TEST,
    test
});

const removeTest = testId => ({
    type: REMOVE_TEST,
    testId
});

export const fetchLatestTests = () => dispatch => {
    return TestAPIUtil.fetchLatestTests()
        .then(tests => dispatch(receiveLatestTests(tests.data)))
};

export const fetchRandomTest = () => dispatch => {
    return TestAPIUtil.fetchRandomTest()
        .then(test => dispatch(receiveTest(test.data[0])))
};

export const fetchTest = () => dispatch => {
    return TestAPIUtil.fetchTest()
        .then(test => dispatch(receiveTest(test.data[0])))
};

export const postTest = test => dispatch => {
    return TestAPIUtil.postTest(test)
        .then((test) => {
      dispatch(receiveTest(test.data))
    }, (err) => console.log("inside errors", err)
    );

};

export const deleteTest = id => dispatch => {
    return TestAPIUtil.deleteTest(id)
        .then(res => dispatch(removeTest(res.data.id)))
};

export const updateTest = (id, test) => dispatch => {
    return TestAPIUtil.updateTest(id, test)
        .then(test => dispatch(receiveTest(test.data)))
};