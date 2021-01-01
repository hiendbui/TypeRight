import React from 'react';
import {AreaChart,  Area, CartesianGrid, XAxis, YAxis, Label } from 'recharts';
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
        const attemptIds = Object.keys(this.props.attempts)
        const data = []
        for (let i = 0; i < attemptIds.length; i++) {
            data.push({
                x: i+1,
                y: this.props.attempts[attemptIds[i]].wpm
            })
        }
        
        return(
            <div>
                <h1>{this.props.header}</h1>
                <div>
                    <AreaChart width={750} height={300} data={data} >
                        <Area type="monotone" dataKey="y" stroke="#563097c5" fill="#7a44d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="x" >
                             <Label value="Test Attempts" stroke="white" offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis dataKey="y" >
                            <Label value="Words Per Minute" angle="-90"  stroke="white"  position="Left" />
                        </YAxis>
                    </AreaChart>
                </div>
            </div>
        )
    }
}