import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import history from '../history';

class PostForm extends Component {
  state = {
    title: "",
    body: "",
    image: Math.random()
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
      image:this.state.image
    };

    this.props.createPost(post);
    this.setState({ title: "", body: ""});

    history.push("/posts")
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
              placeholder="Enter Title here"
            />
          </div>
          <br />
          <div>
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
              placeholder="Enter Content here"
            />
          </div>
          <br />
            <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createPost })(PostForm);