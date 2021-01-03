import { connect } from 'react-redux';
import Leaderboard from './leaderboard';
import { fetchTestAttempts } from '../../actions/attempt_actions';
import { fetchTest } from '../../actions/test_actions';
import { fetchAllUsers } from '../../actions/user_actions'

const msp = (state, ownProps) => ({
    currentUser: state.session.user,
    currentTest: ownProps.match.params.testId,
    // currentTest: state.entities.tests.current,
    attempts: Object.values(state.entities.attempts),
    tests: state.entities.tests,
    users: state.entities.users
})

const mdp = dispatch => ({
    fetchTestAttempts: testId => dispatch(fetchTestAttempts(testId)),
    fetchTest: id => dispatch(fetchTest(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

const LeaderboardContainer = connect(msp,mdp)(Leaderboard);
export default LeaderboardContainer;