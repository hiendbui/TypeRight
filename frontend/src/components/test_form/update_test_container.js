import { connect } from "react-redux";
import TestForm from "./test_form";
import { updateTest } from '../../actions/test_actions';
// import { closeTestFormModal } from '../../actions/modal_actions';

const msp = (state) => ({
  test: state.entities.tests[state.entities.tests.current],
  formType: 'Update Test',
});

const mdp = (dispatch) => ({
  submitForm: (test) => dispatch(updateTest(test))
});

export default connect(msp, mdp)(TestForm);
