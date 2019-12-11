import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

class PostForm extends Component {
  state = {
    title: "",
    body: "",
    image: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
      image: `https://source.unsplash.com/featured/?{${this.state.image}}`
    };

    this.props.createPost(post)
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Content: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <div>
            <label>Image: </label>
            <br />
            <textarea
              name="image"
              onChange={this.onChange}
              value={this.state.image}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
