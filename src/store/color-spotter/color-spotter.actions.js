import {store} from '../store';
import {
  getColorSpotterStateWithDependencies,
  INITIAL_LEVEL,
  INITIAL_NR_OF_COLOR_ITEMS_PER_ROW, MAX_LEVEL
} from "./color-spotter.utils";

import {lostGame, wonGame} from "../game-status/game-status.actions";

export const GET_INITIAL_LEVEL = 'GET_INITIAL_LEVEL';
export const INCREASE_LEVEL = 'INCREASE_LEVEL';

export const getInitialLevel = () => {
  return {
    type: GET_INITIAL_LEVEL,
    colorSpotter: getColorSpotterStateWithDependencies({
      level: INITIAL_LEVEL,
      numberOfColorItemsPerRow: INITIAL_NR_OF_COLOR_ITEMS_PER_ROW
    })
  }
};

export const increaseLevel = () => {
  const colorSpotterState = store.getState().colorSpotter;
  const colorSpotter = getColorSpotterStateWithDependencies({
    level: colorSpotterState.level + 1,
    numberOfColorItemsPerRow: colorSpotterState.numberOfColorItemsPerRow + 1
  });
  return {
    type: INCREASE_LEVEL,
    colorSpotter
  }
};

export const clickColorItem = (colorItem) => (dispatch) => {
  if (colorItem.pickColor) {
    if (store.getState().colorSpotter.level < MAX_LEVEL) {
      dispatch(increaseLevel());
    } else {
      dispatch(wonGame())
    }
  } else {
    dispatch(lostGame())
  }
};

