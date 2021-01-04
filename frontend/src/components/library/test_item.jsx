import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openTestFormModal } from '../../actions/modal_actions';
import { selectTest } from '../../actions/test_actions';
import { MdModeEdit } from "react-icons/md";

function TestItem({ test, selectTest, openTestFormModal, editable }) {
    function editTest(testId){
        selectTest(testId)
        openTestFormModal("Update")
    }
    return (
        <>
        {Boolean(test) && 
        <Link to={`/tests/${test._id}`} className='test-item-container'>
            <div className="test-item-preview">{test.content}</div>
            <div className="test-item-title">
                {test.title}
                {
                    editable && <button onClick={(e) => {e.preventDefault(); editTest(test._id)}}>
                    <MdModeEdit className="edit-icon"/>
                    </button> 
                }
            </div>
        </Link>}
        </>
    )
}

const msp = (state, ownProps) => ({
    test: ownProps.test,
    editable: ownProps.editable
})

const mdp = dispatch => ({
    selectTest: (testId) => dispatch(selectTest(testId)),
    openTestFormModal: (modal) => dispatch(openTestFormModal(modal))
})

export default connect(msp, mdp)(TestItem)