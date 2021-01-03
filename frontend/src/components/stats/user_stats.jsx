import React from 'react';
import {AreaChart,  Area, CartesianGrid, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import './user_stats.scss' 
export default class UserStats extends React.Component {
    componentDidMount() {
        this.props.fetchAttempts(this.props.currentUser.id, this.props.currentTest)
            .then(() => {
                for (const attempt in this.props.attempts) {
                     this.props.fetchTest(this.props.attempts[attempt].test)
                }
            })
    }

    render() {
        if (Object.keys(this.props.attempts).length < 3) return (
            <div>
                <h1>{this.props.header}</h1>
                <br/>
                <div className="user-stats">
                    <h1 className="no-stats">Stats only show after 3 test attempts</h1>
                </div>
            </div>
        )
        const attemptIds = Object.keys(this.props.attempts)
        
        const data = []
        for (let i = 0; i < attemptIds.length; i++) {
            data.push({
                x: i+1,
                y: this.props.attempts[attemptIds[i]].wpm
            })
        }
        
        if (!this.props.currentTest) return null;
       
        return(
            <div className="user-stats-wrapper">
                <h1>{this.props.header}</h1>
                <div className="user-stats">
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={data} >
                            <Area type="monotone" dataKey="y" stroke="#563097c5" fill="#7a44d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="x" height={40} >
                                <Label value="Test Attempts" stroke="white" offset={0} position="insideBottom" dy={0}/>
                            </XAxis>
                            <YAxis dataKey="y" >
                                <Label value="Words Per Minute" angle={-90}  stroke="white" position="insideLeft" dy={70}/>
                            </YAxis>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

// width={750} height={500}