import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App';
import {getAppStateMock} from "../mocks/app-state-mock";
import {getColorSpotterMock} from "../mocks/color-spotter.mock";
import {getGameStatusMock} from "../mocks/game-status.mock";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const state = getAppStateMock({
    gameStatus: getGameStatusMock(),
    colorSpotter: getColorSpotterMock()
  });
  ReactDOM.render(<App {...state} />, div);
});
