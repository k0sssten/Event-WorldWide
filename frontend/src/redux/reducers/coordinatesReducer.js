import {  GET_COORDINATES } from "../types/coordinatesTypes";

function coordinatesReducer(state = [], action) {

  switch (action.type) {


    case GET_COORDINATES:
      return action.payload;

    default:
      return state;
  }
}

export default coordinatesReducer;
