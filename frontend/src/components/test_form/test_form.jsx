import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";
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
        test.content = test.content.trim();
        this.props.submitForm(test);
    }

    handleInput(type){
        return e => {
            this.setState({ [type]: e.target.value });
        }
    }

    displayErrors() {
        if (this.props.errors.length === 0) return null;
        
        return (
            <div className="error-msg">
                {this.props.errors.map((el, idx) => (
                <div key={idx}>{el}</div>
                ))}
            </div>
        );
    }

    render() {
        return (
      <div className="modal-form">
            <form onSubmit={this.handleSubmit}>
                <div className="text-input-section">
                    <h3>{this.props.formType}</h3>
                    {this.displayErrors()}
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
                <div className="test-form-btn-container">
                    {this.props.formType === "Edit Test" ? (
                        <>
                        <button className="trash-btn submit-btn">
                            <AiFillDelete onClick={(e) => {e.preventDefault(); this.props.deleteTest()}} className="trash-icon"/>
                        </button>
                        <button className="test-form-btn submit-btn"type="submit">Update Test</button>
                        </>
                    ) : (
                        <button className="test-form-btn submit-btn" type="submit">{this.props.formType}</button>
                    ) }
                </div>
            </form>
        </div>
        )
    }
}
