import { GET_POSTER } from "../types/posterTypes";
import axios from "axios";

export function setAll(value) {
  return {
    type: GET_POSTER,
    payload: value
  }
}

export const getRandomEventPoster = () => async (dispatch) => {
  const randomPoster = await axios('https://app.ticketmaster.com/discovery/v2/events.json?apikey=MQLDj61OKln5rl4wZEruMOfnZJBhW2aF&startDateTime=2021-08-13T00:00:00Z');
  dispatch(setAll(randomPoster.data._embedded.events))
}



