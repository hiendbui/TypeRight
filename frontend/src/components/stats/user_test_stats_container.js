import { connect } from 'react-redux';
import UserStats from './user_stats';
import { fetchUserTestAttempts } from '../../actions/attempt_actions';
import { fetchTest } from '../../actions/test_actions';

const msp = state => ({
    currentUser: state.session.user,
    currentTest: state.entities.tests.current,
    attempts: state.entities.attempts,
    tests: state.entities.tests,
    header: `Your Stats for ${state.entities.tests[state.entities.tests.current].title}`
})

const mdp = dispatch => ({
    fetchAttempts: (userId, testId) => dispatch(fetchUserTestAttempts(userId, testId)),
    fetchTest: id => dispatch(fetchTest(id)),
})

const UserTestStatsContainer = connect(msp,mdp)(UserStats);
export default UserTestStatsContainer;