import React from 'react';
import {AreaChart,  Area, CartesianGrid, XAxis, YAxis, Label, ResponsiveContainer, Tooltip} from 'recharts';
import './user_stats.scss' 
export default class UserStats extends React.Component {
    componentDidMount() {
        if (this.props.currentUser.id) {
            this.props.fetchAttempts(this.props.currentUser.id, this.props.currentTest)
            .then(() => {
                if (this.props.header === "Your Overall Stats") 
                for (const attempt in this.props.attempts) {
                     this.props.fetchTest(this.props.attempts[attempt].test)
                }
        })}
    }

    openModal() {
        this.props.openSessionModal('Sign Up');
    }
    
    render() {
        const userAttempts = Object.values(this.props.attempts).filter(attempt => attempt.user === this.props.currentUser?.id)
        if (!this.props.loggedIn) {
            return (
            <div>
                <h1>{this.props.header}</h1>
                
                <div className="user-stats" onClick={() => this.openModal()}>
                    <h1 className="no-stats no-user">Please create an account to track your progress!</h1>
                </div>
            </div>
            )
        } else if (userAttempts.length === 0) {
            return (
                <div>
                    <h1>{this.props.header}</h1>
                    <br/>
                    <div className="user-stats">
                        <h1 className="no-stats">Stats only appear after 3 test attempts</h1>
                    </div>
                </div>
                )
        } else if (userAttempts.length < 3) {
            return (
                <div>
                    <h1>{this.props.header}</h1>
                    <br/>
                    <div className="user-stats">
                        <h1 className="no-stats">Stats will appear after {3 - userAttempts.length} more attempt{(userAttempts.length < 2) ? 's' : ''}</h1>
                    </div>
                </div>
        )};
        
        const data = []
        for (let i = 0; i < userAttempts.length; i++) {
            data.push({
                x: i+1,
                ...userAttempts[i]
            })
        }
        const CustomTooltip = ({ active, payload }) => {
            if (active) {
                const date = new Date(payload[0].payload.createdAt).toDateString().split(" ");
                date.shift();
                let title ="";
                if (this.props.header === "Your Overall Stats") title = `Test: "${this.props.tests[payload[0].payload.test]?.title}"`
                
               
            return (
                
            <div className="custom-tooltip">
                <p className="label">{`WPM: ${payload[0].payload.wpm}`}</p>
                <p className="label">{`Accuracy: ${Math.ceil(payload[0].payload.accuracy*100)}`}</p>
                <p className="label">{`Errors: ${payload[0].payload.typos}`}</p>
                <p className="label">{`Date Taken: ${date.join(" ")}`}</p>
                <p className="label">{title}</p>
            </div>
            );
            }
        return null;
        };

        if (!this.props.currentTest) return null;
       
        return(
            <div className="user-stats-wrapper">
                <h1>{this.props.header}</h1>
                <div className="user-stats">
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={data} >
                            <Area fillOpacity={1} type="monotone" dataKey="wpm" stroke="#563097c5" fill="#7a44d8" />
                            <CartesianGrid stroke="#888" />
                            <XAxis tick={{fill: 'white'}} dataKey="x" height={40} >
                                <Label value="Test Attempts" fill="white" offset={0} position="insideBottom" dy={0}/>
                            </XAxis>
                            <YAxis tick={{fill: 'white'}} dataKey="wpm" >
                                <Label value="Words Per Minute" angle={-90}  fill="white" position="insideLeft" dy={70}/>
                            </YAxis>
                            <Tooltip content={<CustomTooltip/>} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

// width={750} height={500}