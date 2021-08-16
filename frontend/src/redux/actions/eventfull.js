import { GET_EVENTS_FULL } from "../types/eventfullTypes"
import axios from "axios"

export function setAllByParams(value) {
  return {
    type: GET_EVENTS_FULL,
    payload: value
  }
}

export const getEventsByParams = (formData) => async (dispatch) => {
  const apikey = 'MQLDj61OKln5rl4wZEruMOfnZJBhW2aF'
  const countryCode = formData.countryCode
  const date = formData.startDateTime._d.toISOString().substring(0, 10);
  const startDateTime = `${date}T00:00:00Z`
  const city = formData.city
  const classificationName = formData.classificationName
  const eventsByParams = await axios(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apikey}&countryCode=${countryCode}&startDateTime=${startDateTime}&city=${city}&classificationName=${classificationName}`);
  if (eventsByParams.data._embedded.events.length > 1) {
    dispatch(setAllByParams(eventsByParams.data._embedded.events))
    console.log(eventsByParams.data._embedded.events);
  }
}
