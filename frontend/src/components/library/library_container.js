import { connect } from 'react-redux';
import { fetchLatestTests } from '../../actions/test_actions'
import Library from './library';

const mapStateToProps = state => ({
   tests: (Object.values(state.entities.tests)).filter(t => t.content).sort((a,b) => (a.updatedAt < b.updatedAt) ? 1: -1),
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