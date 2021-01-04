import { connect } from 'react-redux';
import { fetchRandomTest } from '../../actions/test_actions';
import { createAttempt } from '../../actions/attempt_actions';

import Typing from './typing';
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
   test: state.entities.tests[state.entities.tests.current],
   loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    fetchRandomTest: () => dispatch(fetchRandomTest()),
    createAttempt: (attempt) => dispatch(createAttempt(attempt)),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Typing));