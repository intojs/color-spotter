import './ColorSpotter.css';

import React from 'react';

export const ColorSpotter = ({level, colorItems, colorItemWidth, clickColorItem}) => {
  return (
    <div className="color-spotter">
      <div className="color-spotter__level">{level}</div>
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
              onClick={clickColorItem(colorItem)}
            >
            </div>
        )
      }
    </div>
  );
};
