import { connect } from 'react-redux';
import { fetchUserTests } from '../../actions/test_actions'
import Library from './library';

const mapStateToProps = state => ({
   tests: state.entities.tests,
   currentUser: state.session.user.id,
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