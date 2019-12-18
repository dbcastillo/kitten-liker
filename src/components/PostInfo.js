import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost, deletePost } from "../actions/postActions";

class PostInfo extends Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getPost(id);
  }

  render() {
    console.log("post info", this.props.match.params.id);

    const post = this.props.post
    return (
        <article key={post.id}>
        <div className="card">
        <img src={post.image} alt="Avatar" />
        <div className="container">
          <h3>
            <b>Title: {post.title}</b>
          </h3>
          <p>Content: {post.content}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      </article>

    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   let id = ownProps.match.params.id;
//   return {
//     post: state.post.find(post => post.id === id)
//   };
// };

const mapStateToProps = (state) => ({ 
    post: state.posts.singleItem 
})

const mapDispatchToProps = dispatch => ({
  getPost: (id) => dispatch(getPost(id)),
  deletePost: () => dispatch(deletePost())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);
