import { connect } from "react-redux";
import TestForm from "./test_form";
import { updateTest, deleteTest } from '../../actions/test_actions';
// import { closeTestFormModal } from '../../actions/modal_actions';

const msp = (state) => ({
  test: state.entities.tests[state.entities.tests.current],
  formType: 'Edit Test',
});

const mdp = (dispatch, ownProps) => ({
  submitForm: (test) => dispatch(updateTest(ownProps.testId, test)),
  deleteTest: () => dispatch(deleteTest(ownProps.testId))
});

export default connect(msp, mdp)(TestForm);
