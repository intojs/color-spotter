import React from 'react';

import './ColorSpotter.css';

export const ColorSpotter = ({colorItems}) => {
  return (
    <div className="color-spotter">
      {
        colorItems.map(
          (colorItem, index) =>
            <div
              className="color-spotter__item"
              style={{backgroundColor: `hsl(${colorItem.hue}, ${colorItem.saturation}%, ${colorItem.lightness}%)`}}
              key={index}
            >
            </div>
        )
      }
    </div>
  );
};
