import { RECEIVE_LATEST_TESTS, 
         RECEIVE_RANDOM_TEST               
} from '../actions/test_actions';
import { arrayToObj, arrayOfIds } from './selectors';

const initialState = {}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LATEST_TESTS:
        return {
            ...state,
            ...arrayToObj(action.tests),
            latest: arrayOfIds(action.tests)
        };
    case RECEIVE_RANDOM_TEST:
        return {
            ...state,
            [action.test.id]: action.test,
            current: action.test.id
        };
    default:
        return state;
  }
}

export default testReducer;