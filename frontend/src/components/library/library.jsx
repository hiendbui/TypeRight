import React, { Component } from 'react'
import TestItem from './test_item'
import './library.scss'

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
            <div className="library-container">
                <h3>Explore Our Latest Test Submissions</h3>
                <div className="page-card library">
                    {this.props.tests.latest.map(testId => (
                        <TestItem test={this.props.tests[testId]} />
                    ))}
                    <div className="filling-empty-space-childs"></div>
                    <div className="filling-empty-space-childs"></div>
                    <div className="filling-empty-space-childs"></div>
                </div>
            </div>
        )
    }
}
