import {GET_INITIAL_LEVEL, INCREASE_LEVEL} from "./color-spotter.actions";

export const colorSpotterReducer = (state = null, action) => {
  switch (action.type) {
    case GET_INITIAL_LEVEL:
    case INCREASE_LEVEL:
      return action.colorSpotter;
    default:
      return state;
  }
};
