import { connect } from 'react-redux';
import { fetchUserTests } from '../../actions/test_actions'
import Library from './library';

const mapStateToProps = state => ({
   tests: Object.values(state.entities.tests).filter(t => t.uploader === state.session.user.id).sort((a,b) => (a.updatedAt < b.updatedAt) ? 1: -1),
   header: "Your Library",
   editable: true
});

const mapDispatchToProps = dispatch => ({
    fetchTests: (userId) => dispatch(fetchUserTests(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);