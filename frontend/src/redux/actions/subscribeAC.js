import { GET_SUBCRIBE, ADD_SUBSCRIBE, DELETE_SUBSCRIBE, CHANGE_STATUS } from "../types/subscribesTypes";

import axios from "axios";

export function setAll(value) {
  return {
    type: GET_SUBCRIBE,
    payload: value
  }
}

export function createSubscribe(value) {
  return {
    type: ADD_SUBSCRIBE,
    payload: value
  }
}

export const addOneSubscribe = (data) => async (dispatch) => {
  const oneSubscribe = await axios.post('http://localhost:3001/api/v1/subscribes',  data )
  dispatch(createSubscribe(oneSubscribe.data))
}
