import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost, deletePost } from "../actions/postActions";
import { Link } from "react-router-dom";
import "../stylesheets/PostInfo.css";

class PostInfo extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    console.log("POST INFO COMPONENT", this.props.post);

    const post = this.props.post;
    return (
      <div className="card-div" key={post.id}>
        <img src={post.image} alt="Avatar" className="postImage" />
        <div className="container">
          <h3>
            <b className="postTitle">Title: {post.title}</b>
          </h3>
          <p className="postContent">Content: {post.content}</p>
          <Link to={`/posts/${post.id}/edit`}>
            <button className="editButton">Edit</button>
          </Link>
          <button
            className="deleteButton"
            onClick={() => this.props.deletePost(post)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.posts.singleItem
});

const mapDispatchToProps = { getPost, deletePost };

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);
