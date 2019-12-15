//actions to fetch posts and create new
import {
  FETCH_POSTS,
  NEW_POST,
  RECEIVE_POST,
  REMOVE_POST
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case RECEIVE_POST:
      return action.posts;
    case REMOVE_POST:
      return state.filter(post => post.id !== action.payload.id);
    default:
      return state;
  }
}
