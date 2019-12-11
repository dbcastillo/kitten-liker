import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import "../Posts.css"

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {
      console.log(this.props);
      
    const postItems = this.props.posts.map((post, ind) => (
        <div class="card">
            <img src={`https://picsum.photos/300?random=${ind}`} alt="RandomPic" />
            <div class="container">
                <h3><b>Title: {post.title}</b></h3>
                <p>Content: {post.body}</p>
            </div>
        </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        <div className="flex-container">
            {postItems}
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

const mapDispatch = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatch)(Posts);
