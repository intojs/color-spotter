import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

import {colorSpotterReducer} from "./color-spotter/color-spotter.reducer";
import {gameStatusReducer} from "./game-status/game-status.reducer";

const reducers = combineReducers({
  gameStatus: gameStatusReducer,
  colorSpotter: colorSpotterReducer
});

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
