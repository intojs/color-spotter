export const START_GAME = 'START_GAME';
export const LEVEL_UP = 'LEVEL_UP';

export const startGame = () => {
  return {
    type: START_GAME
  }
};

export const levelUp = () => {
  return {
    type: LEVEL_UP
  }
};

// export const levelUpAsync = () => {
//   return dispatch => {
//     setTimeout(() => {
//       // Yay! Can invoke sync or async actions with `dispatch`
//       dispatch(levelUp());
//     }, 3000);
//   };
// };
