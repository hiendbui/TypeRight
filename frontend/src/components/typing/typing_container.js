import { connect } from 'react-redux';
import { fetchRandomTest } from '../../actions/test_actions'
import Typing from './typing';

const mapStateToProps = state => ({
   test: state.entities.tests[state.entities.tests.current],
});

const mapDispatchToProps = dispatch => ({
    fetchRandomTest: () => dispatch(fetchRandomTest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Typing);