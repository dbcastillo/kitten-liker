import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPost, deletePost } from "../actions/postActions";

class PostInfo extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    console.log("post info", this.props.match.params.id);

    const post = this.props;
    return (
      <div>
        <h2>{post.id}: {post.title}</h2>
        <p>{post.content}</p>
        <div>
          <Link
            to={{ pathname: `/posts/${post.id}/edit`, state: { post: post } }}
          >
            Edit
          </Link>
          <button type="button" onClick={() => this.props.deletePost(post.id)}>
            Delete
          </button>
          <Link to="/posts">Close</Link>
        </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
    post: state.post 
});

const mapDispatchToProps = dispatch => ({
    getPost: () => dispatch(getPost()),
    deletePost: () => dispatch(deletePost())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);
