import React from 'react'
import "./attempt.scss"

export default function Attempt({testData}) {
    const { wpm, accuracy, typos, rawWpm, time } = testData
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
            </div>
        </div>
    )
}
