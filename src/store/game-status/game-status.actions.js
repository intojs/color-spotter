import {getInitialLevel} from "../color-spotter/color-spotter.actions";

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
  dispatch(getInitialLevel());
  dispatch(startGame());
};

