import { GET_POSTER } from "../types/posterTypes";

function posterReducer(state = [], action) {

  switch (action.type) {
    case GET_POSTER:
      return action.payload;

    default:
      return state;
  }
}

export default posterReducer;
