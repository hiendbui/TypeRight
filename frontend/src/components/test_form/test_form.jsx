import React, { Component } from 'react'
//add css here

export default class TestForm extends Component {
    constructor(props) {
        super (props);

        this.state = this.props.test
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const test = Object.assign({}, this.state);
        this.props.submitForm(test);
    }

    handleInput(type){
        return e => {
            this.setState({ [type]: e.target.value });
        }
    }

    render() {
        return (
      <div className="session-form">

            <form onSubmit={this.handleSubmit}>
                <div className="text-input-section">
                    <h3>{this.props.formType}</h3>
                    <label className="title">Title: 
                        <input 
                            type="text" 
                            required 
                            name="title" 
                            placeholder="title" 
                            value={this.state.title}
                            onChange={this.handleInput("title")}
                        />
                    </label>
                    <label className="content">Content: 
                        <textarea 
                            name="content" 
                            cols="30" 
                            rows="10" 
                            placeholder="Type or copy and paste the content of your typing test here"
                            onChange={this.handleInput("content")}
                            required
                            value={this.state.content}
                        />
                    </label>
                    <input className="uploadbutton" type="submit" value={this.props.formType}/>
                </div>
            </form>
        </div>
        )
    }
}
