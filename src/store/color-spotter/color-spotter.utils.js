import * as R from 'ramda';

export const getHue = () => Math.floor(Math.random() * 360);

export const getSaturation = () => Math.floor(Math.random() * 100);

export const getLightness = () => Math.floor(Math.random() * 100);

export const getColor = (hue) => (saturation) => (lightness) => `hsl(${hue}, ${saturation}%, ${lightness}%)`;

export const getNumberOfColorItems = (numberOfColorItemsPerRow) => numberOfColorItemsPerRow * numberOfColorItemsPerRow;

export const getColorItemAbsoluteWidth = (numberOfColorItemsPerRow) => Math.floor(100 / numberOfColorItemsPerRow);

export const getColorItemFormattedWidth = (colorItemAbsoluteWidth) => `${colorItemAbsoluteWidth}%`;

export const getPickColorSaturation = (level, mainColorSaturation) => Math.round((level / 10) * mainColorSaturation);

export const getColorItemWidth = R.pipe(
  getColorItemAbsoluteWidth,
  getColorItemFormattedWidth
);

export const getColorItems = (numberOfColorItems, mainColor, colors = []) => {
  if (colors.length === numberOfColorItems) {
    return colors;
  } else {
    colors.push({
      color: mainColor,
      pickColor: false
    });
    return getColorItems(numberOfColorItems, mainColor, colors);
  }
};

export const getPickColorPosition = (numberOfColorItems) => Math.floor(Math.random() * numberOfColorItems);

export const getColorItemsWithPickColor = (colorItems) => (pickColor, pickColorPosition) =>
  colorItems.map((colorItem, index) =>
    index === pickColorPosition ?
      {
        color: pickColor,
        pickColor: true
      } :
      colorItem
  );
