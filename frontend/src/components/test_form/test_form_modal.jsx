import React, { Component } from 'react'
import { connect } from 'react-redux';
import { closeTestFormModal } from '../../actions/modal_actions';
import CreateTest from './create_test_container.js';
import UpdateTest from './update_test_container';
//import css here

function TestFormModal({ modal, closeTestFormModal, testId}) {
    if (!modal) return null;
    console.log("in the test form modal:", modal);
    let component;
    switch (modal) {
        case "Create":
        component = <CreateTest />;
        break;
        case "Update":
        component = <UpdateTest testId={testId}/>;
        break;
        default:
        return null;
    }
    return (
        <div className="modal-background" onClick={closeTestFormModal}>
            <div className="modal-child" onClick={(e) => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const msp = state => {
    return {
        modal: state.ui.modals.testForm,
        testId: state.entities.tests.current
    }
}

const mdp = dispatch => {
    return {
        closeTestFormModal: () => dispatch(closeTestFormModal())
    }

}
export default connect(msp, mdp)(TestFormModal)