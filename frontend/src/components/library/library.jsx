import React, { Component } from 'react'
import TestItem from './test_item'

export default class Library extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchLatestTests();
    }
    render() {
        if (!this.props.tests.latest) return null;
        return (
            <div>
                <h3>Explore Our Latest Test Submissions</h3>
                <div className="library-container page-card">
                    {this.props.tests.latest.map(testId => (
                        <TestItem test={this.props.tests[testId]} />
                    ))}
                </div>
            </div>
        )
    }
}
