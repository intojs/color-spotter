import React from 'react';

import lost from '../assets/lost.jpg';

export const LostGame = ({startGame}) => {
  return (
    <div className="container mt-4 text-center">
      <img src={lost} alt="lost"/>
      <div className="mt-4">
        <button
          type="button"
          className="btn btn-danger"
          onClick={startGame}
        >
          Play again?
        </button>
      </div>
    </div>
  );
};
