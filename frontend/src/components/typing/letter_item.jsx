import React, { Component } from 'react';

class Letter extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            complete: false,
            correct: null
        }
    }

    handleKeyPress(e) {
        console.log(e.key);
    }

    render() { 
        const {letter} = this.props;

        let klass = 'letter';
        if (this.props.complete) {
            if (this.props.correct) {
                klass = 'letter correct'
            } else {
                klass = 'letter incorrect'
            }
        }

        return (  
            <span className={klass} >
                {letter}
            </span>
        );
    }
}
 
export default Letter;