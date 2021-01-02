import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openTestFormModal } from '../../actions/modal_actions';
import { selectTest } from '../../actions/test_actions';

function TestItem({ test, selectTest, openTestFormModal }) {
    function editTest(testId){
        selectTest(testId)
        openTestFormModal("Update")
    }
    return (
        <Link to="#" className='test-item-container'>
            <div className="test-item-preview">{test.content}</div>
            <div className="test-item-title">{test.title}
            <button onClick={(e) => {editTest(test._id); e.stopPropagation()}}>edit</button>
            </div>
        </Link>
    )
}

const msp = (state, ownProps) => ({
    test: ownProps.test
})

const mdp = dispatch => ({
    selectTest: (testId) => dispatch(selectTest(testId)),
    openTestFormModal: (modal) => dispatch(openTestFormModal(modal))
})

export default connect(msp, mdp)(TestItem)