import { connect } from 'react-redux';
import Stats from './stats';
import { fetchUserAttempts } from '../../actions/attempt_actions';
import { fetchTest } from '../../actions/test_actions';

const msp = state => ({
    currentUser: state.session.user,
    attempts: state.entities.attempts,
    tests: state.entities.tests,
    header: 'Your Overall Stats'
})

const mdp = dispatch => ({
    fetchUserAttempts: userId => dispatch(fetchUserAttempts(userId)),
    fetchTest: id => dispatch(fetchTest(id)),
})

const UserStatsContainer = connect(msp,mdp)(Stats);
export default UserStatsContainer;