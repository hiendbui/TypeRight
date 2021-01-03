import React from 'react';
import Leaderboard from './leaderboard';
import UserTestStatsContainer from './user_test_stats_container';

export default class TestStats extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <Leaderboard/>
                </div>
                <div>
                    <UserTestStatsContainer/>
                </div>
            </div>
        )
    }
}