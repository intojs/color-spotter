import React from 'react';
import ReactDOM from 'react-dom';

import {ColorSpotter} from "./ColorSpotter";
import {getColorSpotterMock} from "../mocks/color-spotter.mock";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const colorSpotter = getColorSpotterMock();
  const clickColorItem = () => {
  };
  ReactDOM.render(
    <ColorSpotter
      level={colorSpotter.level}
      colorItems={colorSpotter.colorItems}
      colorItemWidth={colorSpotter.colorItemWidth}
      clickColorItem={clickColorItem}
    />,
    div
  );
});
