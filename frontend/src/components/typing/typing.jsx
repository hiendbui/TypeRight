import React, {Component} from 'react';
import WordItem from './word_item';

export default class typing extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchRandomTest()
    }

    handleKeyPress(e){
        console.log(e.key);
    }

    render() {
        if(!this.props.test) return null;

        let words = this.props.test.content.split(' ');

        return (
            <div className="type-container page-card" onKeyPress={this.handleKeyPress} tabindex="-1" >
                {words.map( (word, idx) => 
                    <WordItem word={word} key={idx} />
                )}
            </div>
        )
    }
}