import React from 'react';

export const StartGameForm = ({startGame}) => {
  return (
    <div className="container mt-4 text-center">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <form noValidate>
            <h1 className="h3 mb-3">Hello, would you like to play a game?</h1>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Your name"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={startGame}
            >
              Play
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

