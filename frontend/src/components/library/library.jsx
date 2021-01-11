import React, { Component } from 'react'
import TestItem from './test_item'
import './library.scss'

export default class Library extends Component {
    
    componentDidMount(){
        this.props.fetchTests(this.props.currentUser);
    }
    
    render() {
        if (!this.props.tests) return null;

        return (
            <div className="library-container">
                <h3>{this.props.header}</h3>
                <div className="page-card library">
                    {this.props.tests.map( (test, idx) => (
                        <TestItem key={idx} test={test} editable={this.props.editable}/>
                    ))}
                    <div className="filling-empty-space-childs"></div>
                    <div className="filling-empty-space-childs"></div>
                    <div className="filling-empty-space-childs"></div>
                </div>
            </div>
        )
    }
}
