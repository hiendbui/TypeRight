import React from 'react'
import "./attempt.scss"

export default function Attempt(props) {
    return (
        <div>
            <div className="attempt-container">
                <div className="wpm">
                    <h4>WPM</h4>
                    <h2>{props.wpm}</h2>
                </div>
                <div>
                    <div className="accuracy">
                        <h4>Accuracy</h4>
                        <div className="stat">{props.accuracy}</div>
                    </div>
                    <div className="errors">
                        <h4>Errors</h4>
                        <div className="stat">{props.typos}</div>
                    </div>
                    <div className="rawWPM">
                        <h4>Raw WPM</h4>
                        <div className="stat">{props.rawWPM}</div>
                    </div>
                    <div className="time">
                        <h4>Seconds</h4>
                        <div className="stat">{Math.round(props.time / 100)/10.0}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
