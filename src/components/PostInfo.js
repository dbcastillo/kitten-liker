import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost, deletePost } from '../actions/postActions';

class PostInfo extends Component {
    componentDidMount() {                                                         
      this.props.getPost(this.props.match.params.id);
    }
  
    render() {
        console.log('post info',this.props.post);
        
      const post = this.props.post;
      return (
        <div>
          <h2>post_id: post_title</h2>
          <p>this is some post content</p>
          <div >
            <Link to={{ pathname: `/posts/${post.id}/edit`, state: { post: post } }} >  
              Edit
            </Link>
            <button type="button" onClick={() => this.props.deletePost(post.id)}>          
              Delete
            </button>
            <Link to="/posts" >Close</Link>                                                 
          </div>
          <hr/>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => ({ post: state.post });                 
  
  const mapDispatchToProps = { getPost, deletePost };                        
  
  export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);        