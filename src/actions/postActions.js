import {
  FETCH_POSTS,
  NEW_POST,
  RECEIVE_POST,
  REMOVE_POST,
  UPDATE_THE_POST
} from "./types";
import history from "../history";

const getPosts = posts => ({ type: FETCH_POSTS, posts: posts });
const newPost = post => ({ type: NEW_POST, post: post });
const receivePost = post => ({ type: RECEIVE_POST, post: post });
const updateThePost = post => ({ type: UPDATE_THE_POST, post: post });
const deleteThePost = post => ({ type: REMOVE_POST, post: post });
const apiUrl = "http://localhost:3001/api/posts";

export const fetchPosts = () => dispatch => {
  fetch(apiUrl)
    .then(res => res.json())
    .then(posts => dispatch(getPosts(posts)));
};

export const createPost = postData => dispatch => {
  fetch("http://localhost:3001/api/posts", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      title: postData.title,
      content: postData.body,
      image: `https://picsum.photos/id/${Math.round(Math.random() * 100)}/300`
    })
  })
    .then(res => res.json())
    .then(post => dispatch(newPost(post)));
};

export const getPost = id => dispatch => {
  fetch(`${apiUrl}/${id}`)
    .then(res => res.json())
    .then(post => {
      dispatch(receivePost(post));
    });
};

export const updatePost = post => dispatch => {
  const postId = post.id;

  fetch(`${apiUrl}/${postId}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      title: post.title,
      content: post.content,
      image: post.image
    })
  })
    .then(resp => resp.json())
    .then(post => {
      dispatch(updateThePost(post));
      console.log(postId);
      history.push(`/posts/${postId}`);
    });
};

export const deletePost = post => dispatch => {
  const postId = post.id;
  fetch(`${apiUrl}/${postId}`, {
    method: "DELETE"
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(response => {
      console.log(response);
      return dispatch(deleteThePost(response));
    })
    .then(() => {
      history.push("/posts");
    });
};
