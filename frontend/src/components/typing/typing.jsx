import React, {Component} from 'react'

export default class typing extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchRandomTest()
    }
    render() {
        if(!this.props.test) return null;
        return (
            <div className="type-container page-card">
                <span>{this.props.test.content}</span>
            </div>
        )
    }
}
