import {  GET_EVENTS_FULL } from "../types/eventfullTypes";

function eventfullReducer(state = [], action) {

  switch (action.type) {


    case GET_EVENTS_FULL:
      return action.payload;

    default:
      return state;
  }
}

export default eventfullReducer;
