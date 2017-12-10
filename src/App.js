import React, {Component} from 'react';

import {ColorSpotter} from "./components/ColorSpotter";


const hue = 100;
const saturation = 50;
const lightness = 50;

const getHue = () => Math.floor(Math.random() * 360) + 0;
const getSaturation = () => Math.floor(Math.random() * 100) + 0;
const getLightness = () => Math.floor(Math.random() * 100) + 0;

const increaseLevel = (currentLevel) => currentLevel++;

const getNumberOfColorItems = (currentLevel) => currentLevel * currentLevel;

const getColorItem = (hue) => (saturation) => (lightness) => ({
  hue,
  saturation,
  lightness
});

const state = {
  numberOfColorItems: 16
};

const colorItem = getColorItem(getHue())(getSaturation())(getLightness());

const colorItems = [
  colorItem,
  colorItem,
  colorItem,
  colorItem,
  colorItem,
  colorItem,
  colorItem,
  colorItem,
  colorItem
];

class App extends Component {
  state = {
    colorItems: colorItems
  };

  render() {
    return (
      <ColorSpotter {...this.state} />
    );
  }
}

export default App;
