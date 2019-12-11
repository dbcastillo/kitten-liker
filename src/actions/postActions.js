import { FETCH_POSTS, NEW_POST } from "./types";

const getPosts = posts => ({ type: FETCH_POSTS, payload: posts});

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => dispatch(getPosts(posts)));
};

export const createPost = postData => dispatch => {
  
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
