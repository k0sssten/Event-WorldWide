import {  GET_EVENTS_QUICK } from "../types/eventquickTypes";

function eventquickReducer(state = [], action) {

  switch (action.type) {


    case GET_EVENTS_QUICK:
      return action.payload;

    default:
      return state;
  }
}

export default eventquickReducer;
