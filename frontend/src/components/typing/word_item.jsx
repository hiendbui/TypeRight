import React from 'react';
import LetterItem from './letter_item';

class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            incorrect: false
        }
        this.letters = this.props.word.split('').map((letter, idx) => ({
            letter,
            idx,
            complete: false,
            correct: null
        }))
        this.letterIdx = 0;
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        if (e.key === this.letters[this.letterIdx].letter) {
            this.letters[this.letterIdx].correct = true;
        } else {
            this.letters[this.letterIdx].correct = false;
        }
        this.letters[this.letterIdx].complete = true;
        this.letterIdx++;
        this.forceUpdate();
    }

    render() { 
    
        return (  
            <span className="word" onKeyPress={this.handleKeyPress} tabindex="-1" >
                {this.letters.map((letterObj, idx) => (
                    <LetterItem letter={letterObj.letter} key={idx} correct={letterObj.correct} complete={letterObj.complete} />
                ))}
            </span>
        );
    }
}
 
export default Word;