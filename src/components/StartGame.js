import React from 'react';

export const StartGame = ({startGame}) => {
  return (
    <div className="container mt-4 text-center">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
            <h1 className="h3 mb-3">Hello, would you like to play a game?</h1>
            <p>Pick the different color!</p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={startGame}
            >
              Play
            </button>
        </div>
      </div>
    </div>
  );
};

