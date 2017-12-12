import './ColorSpotter.css';

import React from 'react';

export const ColorSpotter = ({colorItems, colorItemWidth, clickColorItem}) => {
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
              onClick={clickColorItem.bind(null, colorItem)}
            >
            </div>
        )
      }
    </div>
  );
};
