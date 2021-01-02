import React from 'react';
import UserStatsContainer from '../stats/user_stats_container';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <UserStatsContainer />
                </div>
                {/* Another div with user's library will go here */}
            </div>
        )
    }
}