import { connect } from "react-redux";
import TestForm from "./test_form";
import { postTest } from '../../actions/test_actions';

const msp = state => ({
    test: {
            title: "",
            content: ""
    },
    errors:
    formType: "Create Test"
})

const mdp = dispatch => ({
    submitForm: (test) =>  dispatch(postTest(test))
})

export default connect(msp, mdp)(TestForm);