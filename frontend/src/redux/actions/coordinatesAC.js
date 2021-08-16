import { GET_COORDINATES } from "../types/coordinatesTypes";
import axios from "axios";

export function setAll(value) {
  return {
    type: GET_COORDINATES,
    payload: value
  }
}

export const getFavouriteEventsCoordinates = () => async (dispatch) => {
  const favouriteEventsCoordinates = await axios('http://localhost:3001/api/v1/subscribes');
  console.log(favouriteEventsCoordinates.data);
  dispatch(setAll(favouriteEventsCoordinates.data))
}
