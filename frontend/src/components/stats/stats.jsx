import React from 'react';

export default class Stats extends React.Component {
    componentDidMount() {
        this.props.fetchUserAttempts
            .then(() => {
                for (attempt of this.state.attempts) {
                    this.props.fetchTest(attempt.test)
                }
            })
    }

    render() {
        
    }
}