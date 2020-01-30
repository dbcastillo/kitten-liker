import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts, deletePost } from "../actions/postActions";
import "../stylesheets/Posts.css";
import history from "../history";
import { Route } from "react-router-dom";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  handleDelete = e => {
    const cardId = parseInt(
      e.target.parentNode.children[2]["href"].split("/").reverse()[1]
    );
    const card = this.props.posts.filter(post => post.id === cardId)[0];

    this.props.deletePost(card);
  };

  render() {
    const postItems = this.props.posts.map(post => (
      <div className="card" key={post.id}>
        <img src={post.image} alt="Avatar" />
        <div className="container">
          <h3>
            <b>Title: {post.title}</b>
          </h3>
          <p>Content: {post.content}</p>
          <Link to={`/posts/${post.id}`}>
            <button>More Info</button>
          </Link>
        </div>
      </div>
    ));

    if (this.props.posts.length) {
      return (
        <div>
          <h1 className="posts">Redux-stagram</h1>
          <div className="flex-container">{postItems}</div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading Posts...</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

const mapDispatchToProps = { fetchPosts, deletePost };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
