import React, { Component } from 'react'
import Postform from './Postform'
import {connect } from "react-redux";
import {fetchPosts} from "../actions/postAction";

class Posts extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     };
    // }
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const postItems = this.props.posts.map( post=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ) );
        return (
            <div>
                <h1>Post</h1>
                { postItems }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.reducerPost.items
});
export default connect(mapStateToProps, { fetchPosts })(Posts);