import {getInitialLevel} from "../color-spotter/color-spotter.actions";

export const START_GAME = 'START_GAME';
export const WON_GAME = 'WON_GAME';
export const LOST_GAME = 'LOST_GAME';

export const startTheGame = () => ({
  type: START_GAME
});

export const wonGame = () => ({
  type: WON_GAME
});


export const lostGame = () => ({
  type: LOST_GAME
});

export const startGame = () => (dispatch) => {
  dispatch(getInitialLevel());
  dispatch(startTheGame());
};

