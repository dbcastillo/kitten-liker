import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchPosts } from "../actions/postActions";
import "../stylesheets/Posts.css";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    
    const postItems = this.props.posts.map(post =>  
      <div className="card" key={post.id}>
        <Link to={`/posts/${post.id}`}>
         <img src={post.image} alt="Avatar" />
        </Link>
        <div className="container">
          <h3>
            <b>Title: {post.title}</b>
          </h3>
          <p>Content: {post.content}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );

    if (this.props.posts.length) {
      return (
        <div>
          <h1>Posts</h1>
          <div className="flex-container">{postItems}</div>
        </div>
      )
    } else {
      return (
        <div>
          <h1>
            No Posts
          </h1>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
