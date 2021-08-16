import { GET_SUBCRIBE, ADD_SUBSCRIBE, DELETE_SUBSCRIBE, CHANGE_STATUS } from "../types/subscribesTypes";

function subscribeReducer(state = [], action) {

  switch (action.type) {
    case GET_SUBCRIBE:
      // возвращаем новое состояние
      return action.payload;

    case ADD_SUBSCRIBE:
      return [...state, action.payload];

    case DELETE_SUBSCRIBE:
      return state.filter(el => el.id !== action.payload);

    // case CHANGE_STATUS:
    //   return state.map(el => {
    //     if (el.id === action.payload) {
    //       return {
    //         ...el,
    //         status: !el.status
    //       }
    //     }
    //     return el
    //   })
    default:
      return state;
  }
}

export default subscribeReducer;
