import {createStore, combineReducers, applyMiddleware} from 'redux'

import {colorSpotterReducer} from "./color-spotter/color-spotter.reducer";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

const reducers = combineReducers({
  colorSpotter: colorSpotterReducer
});

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
