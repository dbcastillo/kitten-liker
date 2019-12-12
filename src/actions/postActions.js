import { FETCH_POSTS, NEW_POST } from "./types";

const getPosts = posts => ({ type: FETCH_POSTS, payload: posts });
const newPost = post => ({ type: NEW_POST, payload: post });

export const fetchPosts = () => dispatch => {
  fetch("http://localhost:3001/api/posts")
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
      image: `https://picsum.photos/300?random=${Math.random()}`
    })
  })
    .then(res => res.json())
    .then(post => dispatch(newPost(post)));
};
