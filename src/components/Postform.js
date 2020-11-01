import React, { Component } from 'react';
import { createPost } from "../actions/postAction";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class Postform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            body: "",
            title: ""
        };
        // this.onChange = this.onChange.bind(this);
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        console.log("HI");
        this.props.createPost(post);

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>

                    <label>Title: </label>
                    <br />
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                    <br />
                    <label>Body: </label>
                    <br />
                    <textarea name="body" value={this.state.body} onChange={this.onChange} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
Postform.prototypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, { createPost })(Postform);