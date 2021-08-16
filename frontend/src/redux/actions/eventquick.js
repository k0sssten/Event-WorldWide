import { GET_EVENTS_QUICK } from "../types/eventquickTypes";
import axios from "axios";


export function setAllByKeyword(value) {
  return {
    type: GET_EVENTS_QUICK,
    payload: value
  }
}

export const getEventsByKeyword = (formData) => async (dispatch) => {
const client_id = 'MjI3OTA1NDN8MTYyODE1NzQzNi43MjE4NjAy'
  const keyword = formData.keyword
  // const datetime_utc = '2021-08-12T00:00:00'
  const eventsByKeyword = await axios(`https://api.seatgeek.com/2/events?q=${keyword}&client_id=${client_id}`);
  if (eventsByKeyword.data.events.length > 1) {
    dispatch(setAllByKeyword(eventsByKeyword.data.events))
    console.log(eventsByKeyword.data.events);
  }
}
