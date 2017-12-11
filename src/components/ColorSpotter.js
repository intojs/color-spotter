import React from 'react';

import './ColorSpotter.css';

export const ColorSpotter = ({colorItems, colorItemWidth}) => {
  console.log(colorItems);
  return (
    <div className="color-spotter">
      {
        colorItems.map(
          (colorItem, index) =>
            <div
              className="color-spotter__item"
              style={{
                backgroundColor: colorItem.color,
                width: colorItemWidth
              }}
              key={index}
            >
            </div>
        )
      }
    </div>
  );
};
