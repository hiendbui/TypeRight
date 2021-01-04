import { connect } from 'react-redux';
import { fetchLatestTests } from '../../actions/test_actions'
import Library from './library';

const mapStateToProps = state => ({
   tests: state.entities.tests,
   header: "Explore Our Latest Test Submissions",
   editable: false
});

const mapDispatchToProps = dispatch => ({
    fetchTests: () => dispatch(fetchLatestTests()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);