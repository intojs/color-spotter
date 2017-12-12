import {LOOSE_GAME, START_GAME, WIN_GAME} from "./game-status.actions";

const initialState = {
  hasStarted: false,
  isWon: false,
  isLost: false
};

export const gameStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        hasStarted: true,
        isWon: false,
        isLost: false
      };
    case WIN_GAME:
      return {
        hasStarted: false,
        isWon: true,
        isLost: false
      };
    case LOOSE_GAME:
      return {
        hasStarted: false,
        isWon: false,
        isLost: true
      };
    default:
      return state;
  }
};
