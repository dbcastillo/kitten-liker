//actions to fetch posts and create new
import {
  FETCH_POSTS,
  NEW_POST,
  RECEIVE_POST,
  REMOVE_POST
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  singleItem: {}
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
      return {
          singleItem: action.payload
      }
    case REMOVE_POST:
      return state.filter(post => post.id !== action.payload.id);
    default:
      return state;
  }
}

// export default function productReducer(state = {}, action) {  
//     switch (action.type) {
//       case RECEIVE_PRODUCT:                                     
//         return action.product;
  
//       case UPDATE_PRODUCT:
//         return {
//           id: action.id,
//           name: action.payload.name,
//           description: action.payload.description,
//           price: action.payload.price,
//           category: action.payload.category,
//           picture_url: action.payload.picture_url
//         }
//       default:
//         return state;
//     }
//   };
