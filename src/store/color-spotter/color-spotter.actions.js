import {store} from '../store';
import {
  getColorSpotterStateWithDependencies,
  getLevelFromState,
  INITIAL_LEVEL,
  INITIAL_NR_OF_COLOR_ITEMS_PER_ROW,
  isMaxLevelReached,
  MAX_LEVEL
} from "./color-spotter.utils";

import {looseGame, winGame} from "../game-status/game-status.actions";

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

export const clickColorItemThunk = (colorItem) => (dispatch) => {
  if (colorItem.pickColor) {
    if (isMaxLevelReached(getLevelFromState(store.getState()))(MAX_LEVEL)) {
      dispatch(increaseLevel());
    } else {
      dispatch(winGame())
    }
  } else {
    dispatch(looseGame())
  }
};

