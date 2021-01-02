import { RECEIVE_LATEST_TESTS, 
         RECEIVE_TEST,
         REMOVE_TEST,
         SELECT_TEST
} from '../../actions/test_actions';
import { arrayToObj, arrayOfIds } from '../selectors';

const initialState = {}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LATEST_TESTS:
        return {
            ...state,
            ...arrayToObj(action.tests),
            latest: arrayOfIds(action.tests)
        };
    case RECEIVE_TEST:
        return {
            ...state,
            [action.test._id]: action.test,
            current: action.test._id
        };
    case SELECT_TEST:
        return {
            ...state,
            current: action.testId
        };
    case REMOVE_TEST:
        const nextState = {...state};
        delete nextState[action.testId];
        return nextState;
    default:
        return state;
  }
}

export default testReducer;