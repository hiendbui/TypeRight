import React, { Component } from 'react'
import TypingContainer from "../typing/typing_container"
import LeaderboardContainer from '../stats/leaderboard_container'
import UserTestStatsContainer from '../stats/user_test_stats_container'
import './test.scss'

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {loaded: false};
    }
    componentDidMount(){
        const testId = this.props.match.params.testId;
        if(this.props.tests && this.props.tests[testId]){
            this.props.selectTest(testId)
                .then(() => {this.setState({loaded: true})})
        } else {
            this.props.fetchTest(testId)
                .then(() => {this.setState({loaded: true})})
        }
    }
    render() {
        return (
            <div>
                {this.state.loaded && <TypingContainer/>}
                <div className="bottom-div">
                    <div className="leadboard-wrapper">
                        <LeaderboardContainer/>
                    </div>
                    <div className="user-tests-stats-wrapper">
                        <UserTestStatsContainer/>
                    </div>
                </div>
            </div>
        )
    }
}
