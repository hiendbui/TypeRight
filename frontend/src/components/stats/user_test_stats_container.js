import { connect } from 'react-redux';
import UserStats from './user_stats';
import { fetchUserTestAttempts } from '../../actions/attempt_actions';
import { fetchTest } from '../../actions/test_actions';
import { openSessionModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    currentUser: state.session.user,
    currentTest: ownProps.match.params.testId,
    attempts: state.entities.attempts,
    tests: state.entities.tests,
    loggedIn: state.session.isAuthenticated,
    header: `Your Stats for "${state.entities.tests[state.entities.tests.current]?.title}"`
})

const mdp = dispatch => ({
    fetchAttempts: (userId, testId) => dispatch(fetchUserTestAttempts(userId, testId)),
    fetchTest: id => dispatch(fetchTest(id)),
    openSessionModal: modal => dispatch(openSessionModal(modal))
})

const UserTestStatsContainer = withRouter(connect(msp,mdp)(UserStats));
export default UserTestStatsContainer;