import { connect } from 'react-redux';
import { fetchUserTests } from '../../actions/test_actions'
import Library from './library';

const mapStateToProps = state => ({
   tests: state.entities.tests,
   currentUser: state.session.user.id,
   header: "Your Library"
});

const mapDispatchToProps = dispatch => ({
    fetchTests: () => dispatch(fetchUserTests()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);