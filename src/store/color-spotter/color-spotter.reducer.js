import {LEVEL_UP, START_GAME} from "./color-spotter.actions";

import {
  getColor, getColorItems, getColorItemsWithPickColor, getColorItemWidth, getHue, getLightness, getNumberOfColorItems,
  getPickColorPosition,
  getPickColorSaturation,
  getSaturation
} from "./color-spotter.utils";

export const getColorSpotterState = (initialState) => (dependencies) => {
  const {
    level,
    numberOfColorItemsPerRow
  } = initialState;
  const {
    getHue,
    getSaturation,
    getLightness,
    getColor,
    getPickColorSaturation,
    getNumberOfColorItems,
    getColorItemWidth,
    getColorItems,
    getPickColorPosition,
    getColorItemsWithPickColor
  } = dependencies;
  const numberOfColorItems = getNumberOfColorItems(numberOfColorItemsPerRow);
  const colorItemWidth = getColorItemWidth(numberOfColorItemsPerRow);
  const mainColorHue = getHue();
  const mainColorSaturation = getSaturation();
  const mainColorLightness = getLightness();
  const mainColor = getColor(mainColorHue)(mainColorSaturation)(mainColorLightness);
  const pickColorSaturation = getPickColorSaturation(level, mainColorSaturation);
  const pickColor = getColor(mainColorHue)(pickColorSaturation)(mainColorLightness);
  const pickColorPosition = getPickColorPosition(numberOfColorItems);
  const colorItems = getColorItemsWithPickColor(getColorItems(numberOfColorItems, mainColor))(pickColor, pickColorPosition);
  return {
    level,
    numberOfColorItemsPerRow,
    colorItemWidth,
    numberOfColorItems,
    mainColorHue,
    mainColorSaturation,
    mainColorLightness,
    mainColor,
    pickColor,
    pickColorPosition,
    colorItems
  };
};

export const colorSpotterReducer = (state = null, action) => {
  switch (action.type) {
    case START_GAME:
      return getColorSpotterState({
        level: 1,
        numberOfColorItemsPerRow: 3
      })({
        getHue,
        getSaturation,
        getLightness,
        getColor,
        getPickColorSaturation,
        getNumberOfColorItems,
        getColorItemWidth,
        getColorItems,
        getPickColorPosition,
        getColorItemsWithPickColor
      });
    case LEVEL_UP:
      if (state.level === 10) {
        return state
      } else {
        return getColorSpotterState({
          level: state.level + 1,
          numberOfColorItemsPerRow: state.numberOfColorItemsPerRow + 1
        })({
          getHue,
          getSaturation,
          getLightness,
          getColor,
          getPickColorSaturation,
          getNumberOfColorItems,
          getColorItemWidth,
          getColorItems,
          getPickColorPosition,
          getColorItemsWithPickColor
        });
      }
    default:
      return state;
  }
};
