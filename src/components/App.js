import React, {Component} from 'react';
import {connect} from "react-redux";

import {ColorSpotter} from "./ColorSpotter";
import {startGame, levelUp, levelUpAsync} from "../store/color-spotter/color-spotter.actions";

class App extends Component {
  componentDidMount() {
    this.props.startGame();
  }

  render() {
    return (
      <div>
        <button
          onClick={this.props.levelUp}
        >
          click
        </button>
        {this.props.colorSpotter && <ColorSpotter {...this.props.colorSpotter} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    colorSpotter: state.colorSpotter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGame()),
    levelUp: () => dispatch(levelUp())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
