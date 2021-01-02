import { connect } from 'react-redux';
import { fetchRandomTest } from '../../actions/test_actions';
import { createAttempt } from '../../actions/attempt_actions';

import Typing from './typing';

const mapStateToProps = state => ({
   test: state.entities.tests[state.entities.tests.current],
});

const mapDispatchToProps = dispatch => ({
    fetchRandomTest: () => dispatch(fetchRandomTest()),
    createAttempt: (attempt) => dispatch(createAttempt(attempt)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Typing);