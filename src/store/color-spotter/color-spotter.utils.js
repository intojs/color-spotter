import * as R from 'ramda';

export const INITIAL_LEVEL = 1;
export const MAX_LEVEL = 9;
export const INITIAL_NR_OF_COLOR_ITEMS_PER_ROW = 3;

export const randomIntFromInterval = (min) => (max) => () => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getHue = randomIntFromInterval(0)(360);

export const getSaturation = randomIntFromInterval(30)(100);

export const getLightness = randomIntFromInterval(30)(90);

export const getColor = (hue) => (saturation) => (lightness) => `hsl(${hue}, ${saturation}%, ${lightness}%)`;

export const getNumberOfColorItems = (numberOfColorItemsPerRow) => numberOfColorItemsPerRow * numberOfColorItemsPerRow;

export const getColorItemAbsoluteWidth = (numberOfColorItemsPerRow) => Math.floor(100 / numberOfColorItemsPerRow);

export const getColorItemFormattedWidth = (colorItemAbsoluteWidth) => `${colorItemAbsoluteWidth}%`;

export const getPickColorSaturation = (level, mainColorSaturation) => Math.round((level * 10 * mainColorSaturation) / 100);

export const getPickColorLightness = (level, mainColorLightness) => Math.round((95 * mainColorLightness) / 100);

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

export const getLevelFromState = (state) => state.colorSpotter.level;

export const isMaxLevelReached = (level) => (maxLevel) => level < maxLevel;

const getColorSpotterState = (dependencies) => (initialState) => {
  const {
    getHue,
    getSaturation,
    getLightness,
    getColor,
    getPickColorSaturation,
    getPickColorLightness,
    getNumberOfColorItems,
    getColorItemWidth,
    getColorItems,
    getPickColorPosition,
    getColorItemsWithPickColor
  } = dependencies;
  const {
    level,
    numberOfColorItemsPerRow
  } = initialState;
  const numberOfColorItems = getNumberOfColorItems(numberOfColorItemsPerRow);
  const colorItemWidth = getColorItemWidth(numberOfColorItemsPerRow);
  const mainColorHue = getHue();
  const mainColorSaturation = getSaturation();
  const mainColorLightness = getLightness();
  const mainColor = getColor(mainColorHue)(mainColorSaturation)(mainColorLightness);
  const pickColorSaturation = getPickColorSaturation(level, mainColorSaturation);
  const pickColorLightness = getPickColorLightness(level, mainColorLightness);
  const pickColor = getColor(mainColorHue)(pickColorSaturation)(pickColorLightness);
  const pickColorPosition = getPickColorPosition(numberOfColorItems);
  const colorItems = getColorItemsWithPickColor(getColorItems(numberOfColorItems, mainColor))(pickColor, pickColorPosition);
  return {
    level,
    numberOfColorItemsPerRow,
    numberOfColorItems,
    colorItemWidth,
    mainColorHue,
    mainColorSaturation,
    mainColorLightness,
    mainColor,
    pickColorSaturation,
    pickColor,
    pickColorPosition,
    colorItems
  };
};

export const getColorSpotterStateWithDependencies = getColorSpotterState({
  getNumberOfColorItems,
  getColorItemWidth,
  getHue,
  getSaturation,
  getLightness,
  getColor,
  getPickColorSaturation,
  getPickColorLightness,
  getColorItems,
  getPickColorPosition,
  getColorItemsWithPickColor
});
