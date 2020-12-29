import { connect } from 'react-redux';
import { fetchLatestTests } from '../../actions/test_actions'
// import { objToArray } from '../../reducers/selectors'

import Library from './library';

const mapStateToProps = state => ({
//   tests: ,
});

const mapDispatchToProps = dispatch => ({
    fetchLatestTests: () => dispatch(fetchRandomTest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);