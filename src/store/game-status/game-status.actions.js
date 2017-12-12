import {getInitialLevelAction} from "../color-spotter/color-spotter.actions";
import {
  colorSpotterFactory,
  INITIAL_LEVEL,
  INITIAL_NR_OF_COLOR_ITEMS_PER_ROW
} from "../color-spotter/color-spotter.factory";

export const START_GAME = 'START_GAME';
export const WIN_GAME = 'WIN_GAME';
export const LOOSE_GAME = 'LOOSE_GAME';

export const startGame = () => ({
  type: START_GAME
});

export const winGame = () => ({
  type: WIN_GAME
});

export const looseGame = () => ({
  type: LOOSE_GAME
});

export const startGameThunk = () => (dispatch) => {
  const colorSpotter = colorSpotterFactory({
    level: INITIAL_LEVEL,
    numberOfColorItemsPerRow: INITIAL_NR_OF_COLOR_ITEMS_PER_ROW
  });
  dispatch(getInitialLevelAction(colorSpotter));
  dispatch(startGame());
};

