import React, { Component } from 'react'

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
    onSubmit = (e)=>{
        e.preventDefault();
        const post= {
            title: this.state.title,
            body : this.state.body
        }

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers : {
                "content-type" : "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then( data => console.log(data) );
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
export default Postform;