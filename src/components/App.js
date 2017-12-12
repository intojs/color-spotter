import React, {Component} from 'react';
import {connect} from "react-redux";

import {ColorSpotter} from "./ColorSpotter";
import {StartGameForm} from "./StartGameForm";
import {WonGame} from "./WonGame";
import {LostGame} from "./LostGame";
import {startGameThunk} from "../store/game-status/game-status.actions";
import {clickColorItemThunk} from "../store/color-spotter/color-spotter.actions";

class App extends Component {
  onClickColorItem(colorItem) {
    this.props.clickColorItem(colorItem);
  }

  onStartGame() {
    this.props.startGame();
  }

  render() {
    return (
      <div>
        {
          !this.props.gameStatus.hasStarted &&
          !this.props.gameStatus.isWon &&
          !this.props.gameStatus.isLost &&
          <StartGameForm startGame={this.onStartGame.bind(this)}/>
        }
        {
          this.props.gameStatus.hasStarted &&
          <ColorSpotter
            {...this.props.colorSpotter}
            clickColorItem={this.onClickColorItem.bind(this)}
          />
        }
        {
          this.props.gameStatus.isWon &&
          <WonGame />
        }
        {
          this.props.gameStatus.isLost &&
          <LostGame startGame={this.onStartGame.bind(this)} />
        }
      </div>
    );
  }
}

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
