import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Test from "./test"
import { selectTest, fetchTest } from "../../actions/test_actions";


const msp = state => ({
    tests: state.tests
})

const mdp = (dispatch) => ({
  selectTest: (testId) => dispatch(selectTest(testId)),
  fetchTest: testId => dispatch(fetchTest(testId)),
});

export default withRouter(connect(msp, mdp)(Test))