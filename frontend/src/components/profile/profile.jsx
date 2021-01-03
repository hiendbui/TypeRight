import React from 'react';
import UserStatsContainer from '../stats/user_stats_container';
import UserLibraryContainer from '../library/user_library_container';
import LibraryContainer from '../library/library_container';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <UserStatsContainer />
                </div>
                <div>
                    <UserLibraryContainer />
                </div>
                <div>
                    <LibraryContainer />
                </div>
            </div>
        )
    }
}