import React, { Component } from 'react'
import { fetchRandomTest } from "../../actions/test_actions";
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom"
import "./attempt.scss"



class Attempt extends Component {
    constructor(props){
        super(props)
        this.goToRandom = this.goToRandom.bind(this);
        this.state = {id: this.props.test._id}
    }
    goToRandom(){
        this.props.fetchRandomTest()
            .then(() => {
                if(this.state.id != this.props.test._id){
                    this.props.history.push(`/tests/${this.props.test._id}`)
                    this.setState({id: this.props.test._id})
                    this.props.restartTest()
                }
            })
    }
    render() {
        const { wpm, accuracy, typos, rawWpm, time } = this.props.testData;
        return (
            <div className="page-card">
                <div className="attempt-container">
                    <div className="wpm">
                        <h2>{Math.ceil(wpm)}</h2>
                        <h4>WPM</h4>
                    </div>
                    <div className="secondary-stats">
                        <div className="stat-container">
                            <div className="accuracy">
                                <h4>Accuracy</h4>
                                <div className="stat">{Math.ceil(accuracy*100)}%</div>
                            </div>
                            <div className="errors">
                                <h4>Errors</h4>
                                <div className="stat">{typos}</div>
                            </div>
                        </div>
                        <div className="stat-container">
                            <div className="rawWPM">
                                <h4>Raw WPM</h4>
                                <div className="stat">{Math.ceil(rawWpm)}</div>
                            </div>
                            <div className="time">
                                <h4>Seconds</h4>
                                <div className="stat">{Math.round(time / 100)/10.0}</div>
                            </div>
                        </div>
                    </div>
                    <div className="button-container">
                        <button onClick={this.goToRandom} className="submit-btn">Random test</button>
                        <button onClick={this.props.restartTest} className="submit-btn">Retake this test</button>
                        {
                            this.props.match.path === "/" ?
                                <button className="submit-btn">
                                    <Link to={`/tests/${this.state.id}`}>View test stats</Link>
                                </button> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => ({
  test: state.entities.tests[state.entities.tests.current],
  testData: ownProps.testData
});

const mdp = (dispatch, ownProps) => ({
  fetchRandomTest: () => dispatch(fetchRandomTest()),
  restartTest: () => ownProps.restartTest()
});

export default withRouter(connect(msp, mdp)(Attempt));