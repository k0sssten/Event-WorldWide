import { GET_SUBCRIBE, ADD_SUBSCRIBE, DELETE_SUBSCRIBE, CHANGE_STATUS } from "../types/subscribesTypes";

function subscribeReducer(state = [], action) {

  switch (action.type) {
    case GET_SUBCRIBE:
      return action.payload;

    case ADD_SUBSCRIBE:
      return [...state, action.payload];

    case DELETE_SUBSCRIBE:
      return state.filter(el => el.id !== action.payload);
    default:
      return state;
  }
}

export default subscribeReducer;
