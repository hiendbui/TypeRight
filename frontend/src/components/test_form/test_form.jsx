import React, { Component } from 'react'
import "./test_form.scss"

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
      <div className="modal-form">
            <form onSubmit={this.handleSubmit}>
                <div className="text-input-section">
                    <h3>{this.props.formType}</h3>
                    <label className="title">
                        <h4>Title</h4>
                        <input 
                            type="text" 
                            required 
                            name="title" 
                            placeholder="title" 
                            value={this.state.title}
                            onChange={this.handleInput("title")}
                        />
                    </label>
                    <label className="content">
                        <h4>Content</h4>
                        <textarea 
                            name="content" 
                            cols="30" 
                            rows="10" 
                            placeholder="Type or copy and paste the content of your typing test here"
                            onChange={this.handleInput("content")}
                            required
                            wrap="hard"
                            value={this.state.content}
                        />
                    </label>
                </div>
                    <button className="test-form-btn submit-btn" type="submit">{this.props.formType}</button>
            </form>
        </div>
        )
    }
}
