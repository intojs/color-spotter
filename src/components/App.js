import React from 'react';
import {connect} from "react-redux";

import {ColorSpotter} from "./ColorSpotter";
import {StartGame} from "./StartGame";
import {WonGame} from "./WonGame";
import {LostGame} from "./LostGame";
import {startGameThunk} from "../store/game-status/game-status.actions";
import {clickColorItemThunk} from "../store/color-spotter/color-spotter.actions";

export const App = ({gameStatus, colorSpotter, clickColorItem, startGame}) => (
  <div>
    {
      !gameStatus.hasStarted &&
      !gameStatus.isWon &&
      !gameStatus.isLost &&
      <StartGame startGame={startGame}/>
    }
    {
      gameStatus.hasStarted &&
      <ColorSpotter
        {...colorSpotter}
        clickColorItem={clickColorItem}
      />
    }
    {
      gameStatus.isWon &&
      <WonGame/>
    }
    {
      gameStatus.isLost &&
      <LostGame startGame={startGame}/>
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    gameStatus: state.gameStatus,
    colorSpotter: state.colorSpotter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGameThunk()),
    clickColorItem: (colorItem) => dispatch(clickColorItemThunk(colorItem))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
