import {
  FETCH_POSTS,
  NEW_POST,
  RECEIVE_POST,
  REMOVE_POST
} from "./types";
import history from '../history';


const getPosts = posts => ({ type: FETCH_POSTS, payload: posts });
const newPost = post => ({ type: NEW_POST, payload: post });
const receivePost = post => ({ type: RECEIVE_POST, payload: post })
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
      image: `https://picsum.photos/id/${Math.round(Math.random()*100)}/300`
    })
  })
    .then(res => res.json())
    .then(post => dispatch(newPost(post)));
};

export const getPost = (id) => dispatch => {
  fetch(`http://localhost:3001/api/posts/${id}`)
    .then(res => res.json())
    .then(post => {
      dispatch(receivePost(post))
    })
};

export const deletePost = id => dispatch => {
  fetch(`${apiUrl}/${id}`)
    .then(res => res.json())
    .then(response => {
      dispatch({type: REMOVE_POST, payload: {id}})
    })
    .then(() => {
      history.push("/posts")
    })
    .catch(error => {
      throw(error);
    });
};
