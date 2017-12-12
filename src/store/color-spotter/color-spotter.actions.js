import {colorSpotterFactory, MAX_LEVEL} from "./color-spotter.factory";
import {isMaxLevelReached} from "./color-spotter.utils";
import {looseGame, winGame} from "../game-status/game-status.actions";
import {getColorSpotter, getLevel} from "./color-spotter.selectors";

export const GET_INITIAL_LEVEL = 'GET_INITIAL_LEVEL';
export const INCREASE_LEVEL = 'INCREASE_LEVEL';

export const getInitialLevel = (type) => (colorSpotter) => {
  return {
    type,
    colorSpotter
  }
};

export const getInitialLevelAction = getInitialLevel(GET_INITIAL_LEVEL);

export const increaseLevel = (type, colorSpotterFactory) => (currentColorSpotter) => {
  return {
    type,
    colorSpotter: colorSpotterFactory({
      level: currentColorSpotter.level + 1,
      numberOfColorItemsPerRow: currentColorSpotter.numberOfColorItemsPerRow + 1
    })
  }
};

export const increaseLevelAction = increaseLevel(INCREASE_LEVEL, colorSpotterFactory);

export const clickColorItemThunk = (colorItem) => (dispatch, getState) => {
  const currentState = getState();
  const currentColorSpotter = getColorSpotter(currentState);
  const currentLevel = getLevel(currentState);
  if (colorItem.pickColor) {
    if (isMaxLevelReached(currentLevel, MAX_LEVEL)) {
      dispatch(increaseLevelAction(currentColorSpotter));
    } else {
      dispatch(winGame())
    }
  } else {
    dispatch(looseGame())
  }
};

