import React, {Component} from 'react';
import Attempt from '../attempt/attempt';
import { RiRestartFill } from 'react-icons/ri';

export default class typing extends Component {
    constructor(props){
        super(props);

        this.state = {
            wordObjs: null,
            letterIdx: 0,
            wordIdx: 0,
            startedAt: null,
        }

        this.skipCodes = [16, 17, 18, 20, 9, 27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 44, 46, 33, 34, 35, 36, 37, 38, 39, 40, 224];
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.startTest = this.startTest.bind(this);
    }

    componentDidMount(){
        this.startTest();
    }

    startTest(){
        this.setState({
            letterIdx: 0,
            wordIdx: 0,
            startedAt: null,
            completedTestData: false,
            wordObjs: this.props.test.content.split(' ').map(word => ({
                complete: false,
                letterObjs: word.split('').map(letter => ({
                    letter
                }))
            }))
        }, () => this.typeContainer.focus());

    }

    keySpace(e) {
        e.preventDefault();
        if (this.state.letterIdx !== 0) {
            const newWords = this.state.wordObjs.splice(0);
            newWords[this.state.wordIdx].complete = true;
            const newWordIdx = this.state.wordIdx + 1;

            this.setState({
                wordObjs: newWords,
                letterIdx: 0,
                wordIdx: newWordIdx,
            }, () => { 
                if (newWordIdx === newWords.length) {
                    this.finishTest(newWords);
                }
            })

        }
    }

    keyBackspace(e) {
        e.preventDefault();
        
        if (this.state.letterIdx === 0) {
            
            if (this.state.wordIdx !== 0) {
                const newWords = this.state.wordObjs.splice(0);
                const newWordIdx = this.state.wordIdx - 1;
                let newLetterIdx = newWords[newWordIdx].letterObjs.findIndex(letterObj => !letterObj.complete);
                if (newLetterIdx === -1) newLetterIdx = newWords[newWordIdx].letterObjs.length;
                newWords[newWordIdx].complete = false;
                
                this.setState({
                    wordObjs: newWords,
                    wordIdx: newWordIdx,
                    letterIdx: newLetterIdx,
                })
            }
        } else {
            const newWords = this.state.wordObjs.splice(0);
            const newLetterIdx = this.state.letterIdx - 1;
            if (newWords[this.state.wordIdx].letterObjs[newLetterIdx].extra) {
                newWords[this.state.wordIdx].letterObjs.pop();
                
                this.setState({
                    wordObjs: newWords,
                    letterIdx: newLetterIdx
                })
            } else {
                Object.assign(newWords[this.state.wordIdx].letterObjs[newLetterIdx], {
                    complete: false,
                    correct: null,
                    error: false
                })
                
                this.setState({
                    wordObjs: newWords,
                    letterIdx: newLetterIdx
                })
            }
        }
    }

    keyLetter(e) {
        if (!this.state.startedAt) {
            this.setState({
                startedAt: Date.now()
            })
        }
        if (this.state.letterIdx >= this.state.wordObjs[this.state.wordIdx].letterObjs.length) {
            this.extraLetter(e);
        } else if (e.key === this.state.wordObjs[this.state.wordIdx].letterObjs[this.state.letterIdx].letter) {
            this.correctLetter(e);
        } else if (e.key !== this.state.wordObjs[this.state.wordIdx].letterObjs[this.state.letterIdx].letter) {
            this.incorrectLetter(e);
        }
    }

    extraLetter(e) {
        e.preventDefault();
        const newWords = this.state.wordObjs.splice(0);
        newWords[this.state.wordIdx].letterObjs.push({
            letter: e.key,
            complete: true,
            correct: false,
            extra: true,
        })
        this.setState({
            letterIdx: this.state.letterIdx + 1,
            wordObjs: newWords,
        })
    }

    correctLetter(e) {
        e.preventDefault();
        const newWords = this.state.wordObjs.splice(0);
        const newLetterIdx = this.state.letterIdx + 1
        Object.assign(newWords[this.state.wordIdx].letterObjs[this.state.letterIdx],
            {
                complete: true,
                correct: true
            });

        this.setState({
            letterIdx: newLetterIdx,
            wordObjs: newWords,
        }, () => { 
            if (this.state.wordIdx === newWords.length - 1 && 
                newWords[this.state.wordIdx].letterObjs.length === newLetterIdx &&
                newWords[this.state.wordIdx].letterObjs.every(letterObj => letterObj.correct)
            ) {
                console.log("last word is correct!")
                this.finishTest(newWords);
            }
        })
    }

    incorrectLetter(e) {
        e.preventDefault();
        const newWords = this.state.wordObjs.splice(0);
        Object.assign(newWords[this.state.wordIdx].letterObjs[this.state.letterIdx],
            {
                complete: true,
                correct: false
            });

        this.setState({
            letterIdx: this.state.letterIdx + 1,
            wordObjs: newWords,
        })
    }

    handleKeyPress(e){
        if (e.ctrlKey || e.metaKey || e.altKey || this.skipCodes.includes(e.keyCode) || Boolean(this.state.completedTestData)) {

        } else if ( e.keyCode === 32 ) {
            this.keySpace(e);
        } else if ( e.keyCode === 8 ) {
            this.keyBackspace(e);
        } else {
            this.keyLetter(e);
        }
    }
    
    letterClass (letterObj) {
        if (letterObj.complete) {
            if (letterObj.extra) {
                return 'letter incorrect extra';
            } else if (letterObj.correct) {
                return 'letter correct';
            } else {
                return 'letter incorrect';
            }
        } else {
            return 'letter';
        }
    }

    finishTest (wordObjs) {
        const totalChars = wordObjs.reduce((acc, wordObj) => 
            acc + wordObj.letterObjs.filter(letterObj => 
                letterObj.complete).length, 0 
        ) + wordObjs.length -1;
        
        const time = Date.now() - this.state.startedAt;

        const rawWpm = totalChars / (time / 1000 / 60) / 5;

        const incompleteWords = wordObjs.filter(wordObj =>
            !wordObj.letterObjs[wordObj.letterObjs.length-1].complete
        ).length;

        const incorrectLetters = wordObjs.reduce((acc, wordObj) => 
            acc + wordObj.letterObjs.filter(letterObj =>
                letterObj.complete && !letterObj.correct
            ).length,
            0
        );

        const typos = incompleteWords + incorrectLetters;

        const accuracy = (totalChars - typos) / totalChars;

        const adjustedWpm = rawWpm * accuracy;
       
        this.setState({completedTestData: {
                time: time,
                rawWpm: rawWpm,
                wpm: adjustedWpm,
                typos: typos,
                accuracy: accuracy
        }})

        if(this.props.loggedIn){
            this.props.createAttempt({
                time: time,
                wpm: adjustedWpm,
                typos: typos,
                test: this.props.test._id,
                accuracy: accuracy
            });
        }
    }

    render() {
        if(!this.state.wordObjs) return null;

        return (
        <div>
            {
                Boolean(this.state.completedTestData) && 
                <Attempt 
                    testData={this.state.completedTestData} 
                    match={this.props.match} 
                    test={this.props.test}
                    restartTest={this.startTest}
                />
            }
            <div className="type-container page-card" onKeyDown={this.handleKeyPress} tabIndex="-1" ref={ x => this.typeContainer = x }>
                <button className="restart-btn" onClick={this.startTest}><RiRestartFill className="restart-icon"/></button>
                {this.state.wordObjs.map( (wordObj, wIdx) => 
                    <span
                        className={!wordObj.complete || wordObj.letterObjs.every(letterObj => letterObj.correct) ? 'word' : 'word error'}
                        key={wIdx}
                    >
                        {wordObj.letterObjs.map((letterObj, idx) => (
                            <span
                                key={idx}
                                className={this.letterClass(letterObj)}
                            >
                                {wIdx === this.state.wordIdx &&
                                    idx === this.state.letterIdx &&
                                    <span className='cursor'></span>
                                }
                                {letterObj.letter}
                                
                            </span>
                        ))}
                        {wIdx === this.state.wordIdx &&
                            this.state.letterIdx === wordObj.letterObjs.length &&
                            <span className='cursor'></span>
                        }
                    </span>
                )}
            </div>
        </div>
        )
    }
}