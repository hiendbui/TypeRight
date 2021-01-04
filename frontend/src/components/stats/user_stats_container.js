import { connect } from 'react-redux';
import UserStats from './user_stats';
import { fetchUserAttempts } from '../../actions/attempt_actions';
import { fetchTest } from '../../actions/test_actions';

const msp = state => ({
    currentUser: state.session.user,
    currentTest: [],
    attempts: state.entities.attempts,
    tests: state.entities.tests,
    loggedIn: state.session.isAuthenticated,
    header: 'Your Overall Stats'
})

const mdp = dispatch => ({
    fetchAttempts: userId => dispatch(fetchUserAttempts(userId)),
    fetchTest: id => dispatch(fetchTest(id)),
})

const UserStatsContainer = connect(msp,mdp)(UserStats);
export default UserStatsContainer;