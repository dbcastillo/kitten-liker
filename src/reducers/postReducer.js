//actions to fetch posts and create new
import {
  FETCH_POSTS,
  NEW_POST,
  RECEIVE_POST,
  REMOVE_POST,
  UPDATE_THE_POST
} from "../actions/types";

const initialState = {
  items: [],
  singleItem: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.posts
      };
    case NEW_POST:
      return {
        ...state,
        items: [...state.items, action.post]
      };
    case RECEIVE_POST:
      return {
        ...state,
        singleItem: action.post
      };
    case UPDATE_THE_POST:
      const newItems = state.items.map(post => {
        if (post.id === action.post.id) {
          return action.post;
        } else {
          return post;
        }
      });
      return { ...state, items: newItems };
    case REMOVE_POST:
      return {
        ...state,
        items: state.items.filter(post => post.id !== action.post.id)
      };
    default:
      return state;
  }
}
