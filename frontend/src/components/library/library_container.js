import { connect } from 'react-redux';
import { fetchLatestTests } from '../../actions/test_actions'
import Library from './library';

const mapStateToProps = state => ({
   tests: state.entities.tests,
});

const mapDispatchToProps = dispatch => ({
    fetchLatestTests: () => dispatch(fetchLatestTests()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);