import React from "react";
import { connect } from "react-redux";
import { updatePost } from "../actions/postActions";
import history from "../history";

class PostEdit extends React.Component {
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const title = this.state.title ? this.state.title : this.props.post.title;
    const content = this.state.body ? this.state.body : this.props.post.body;
    const image = this.state.image ? this.state.image : this.props.post.image;
    const post = { id: id, title: title, content: content, image: image };
    this.props.updatePost(post);
  };

  render() {
    console.log("POST EDIT COMPONENT", this.props.post);

    return (
      <div>
        <h1>Edit Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              defaultValue={this.props.title}
            />
          </div>
          <br />
          <div>
            <textarea
              name="body"
              onChange={this.onChange}
              defaultValue={this.props.body}
            />
          </div>
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ post: state.posts.items });

const mapDispatchToProps = { updatePost };

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
