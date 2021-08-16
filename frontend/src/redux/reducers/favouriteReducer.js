import {  GET_EVENTS_FAV, DELETE_FAV } from "../types/favouriteTypes";

function favouriteReducer(state = [], action) {

  switch (action.type) {


    case GET_EVENTS_FAV:
      return action.payload;

      case DELETE_FAV:
      return state.filter(el => el.id !== action.payload);

    default:
      return state;
  }
}

export default favouriteReducer;
