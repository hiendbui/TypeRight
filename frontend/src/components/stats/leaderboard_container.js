import { connect } from 'react-redux';
import Leaderboard from './leaderboard';
import { fetchTestAttempts } from '../../actions/attempt_actions';
import { fetchTest } from '../../actions/test_actions';

const msp = state => ({
    currentUser: state.session.user,
    currentTest: null,
    attempts: state.entities.attempts,
    tests: state.entities.tests,
    header: 'Your Overall Stats'
})

const mdp = dispatch => ({
    fetchTestAttempts: testId => dispatch(fetchTestAttempts(testId)),
    fetchTest: id => dispatch(fetchTest(id)),
})

const LeaderboardContainer = connect(msp,mdp)(Leaderboard);
export default LeaderboardContainer;