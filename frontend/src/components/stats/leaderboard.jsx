import React from 'react';
import './leaderboard.scss'

class Leaderboard extends React.Component {
    
    componentDidMount() {
        this.props.fetchAllUsers(this.props.currentTest)
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.currentTest !== this.props.currentTest) {
            this.props.fetchTestAttempts(this.props.currentTest)
        }
    }

    checkAttempts(count, attempt) {

        if (attempt) {
            // debugger
            return (
                <tr className="leaderboard-row">
                    <td className="leaderboard-rank">{count}.</td>
                    <td className="leaderboard-username">{this.props.users[attempt.user].username}</td>
                    <td className="leaderboard-wpm">{attempt.wpm}</td>
                </tr>
            )
        } else {
            return (
                <tr className="leaderboard-row">
                    <td className="leaderboard-rank">{count}.</td>
                    <td className="leaderboard-username">Be next on the leaderboard!</td>
                    <td className="leaderboard-wpm"></td>
                </tr>
            )
        }
    }

    render() {
        if (this.props.attempts.length === 0) {
            return (
                <div className="leaderboard-table">
                    <div className="another-class">
                        <table>
                            <tbody>
                                <tr className="no-leaderboard">
                                    <td className="no-leaderboard-td">Be the first on the leaderboard!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        let count = 1;
        return (
            <div className="leaderboard-table">
                <div className="another-class">
                    <table>
                        <tbody>
                            <tr className="leaderboard-header-row">
                                <th className="rank">Rank</th>
                                <th className="user">User</th>
                                <th className="wpm">WPM</th>
                            </tr>
                            {this.checkAttempts(count, this.props.attempts[0])}
                            {this.checkAttempts(count + 1, this.props.attempts[1])}
                            {this.checkAttempts(count + 2, this.props.attempts[2])}
                            {this.checkAttempts(count + 3, this.props.attempts[3])}
                            {this.checkAttempts(count + 4, this.props.attempts[4])}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Leaderboard;