import React, { Component } from 'react'
import { connect } from 'react-redux';
import { openTestFormModal } from '../../actions/modal_actions';
import { openSessionModal } from '../../actions/modal_actions';

class CreateTest extends Component {
    constructor(props) {
        super(props)
    }

    openModal(props) {
        
        if(props.loggedIn){
            props.openTestFormModal('Create')
        } else {
            props.openSessionModal('Log In');
        }
    }

    render() {
        return (
            <div onClick={() => this.openModal(this.props)} className="page-card create-test">
                <p>Add a new test!</p>
            </div>
        )
    }
}

const msp = state => ({
    modal: "create",
    loggedIn: state.session.isAuthenticated
})
const mdp = dispatch => ({
    openTestFormModal: (modal) => dispatch(openTestFormModal(modal)),
    openSessionModal: modal => dispatch(openSessionModal(modal))
})

export default connect(msp, mdp)(CreateTest)

