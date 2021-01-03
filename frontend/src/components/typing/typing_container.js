import { connect } from 'react-redux';
import { fetchRandomTest } from '../../actions/test_actions'
import Typing from './typing';
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
   test: state.entities.tests[ownProps.match.params.testId],
});

const mapDispatchToProps = dispatch => ({
    fetchRandomTest: () => dispatch(fetchRandomTest()),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Typing));