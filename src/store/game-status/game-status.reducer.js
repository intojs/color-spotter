import {LOST_GAME, START_GAME, WON_GAME} from "./game-status.actions";

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
    case WON_GAME:
      return {
        hasStarted: false,
        isWon: true,
        isLost: false
      };
    case LOST_GAME:
      return {
        hasStarted: false,
        isWon: false,
        isLost: true
      };
    default:
      return state;
  }
};
