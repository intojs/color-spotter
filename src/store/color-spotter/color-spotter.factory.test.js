import {colorSpotterFactory, getColorItemWidth} from "./color-spotter.factory";

describe('colorSpotterFactory', () => {
  it('should create a color spotter object', () => {
    const level = 1;
    const numberOfColorItemsPerRow = 3;
    const numberOfColorItems = 9;
    const colorItemWidth = getColorItemWidth(numberOfColorItemsPerRow);
    const colorSpotter = colorSpotterFactory({
      level,
      numberOfColorItemsPerRow
    });
    expect(colorSpotter.level).toEqual(level);
    expect(colorSpotter.numberOfColorItemsPerRow).toEqual(numberOfColorItemsPerRow);
    expect(colorSpotter.numberOfColorItems).toEqual(numberOfColorItems);
    expect(colorSpotter.colorItemWidth).toEqual(colorItemWidth);
    expect(colorSpotter.mainColorHue).toBeDefined();
    expect(colorSpotter.mainColorSaturation).toBeDefined();
    expect(colorSpotter.mainColorLightness).toBeDefined();
    expect(colorSpotter.mainColor).toBeDefined();
    expect(colorSpotter.pickColorSaturation).toBeDefined();
    expect(colorSpotter.pickColor).toBeDefined();
    expect(typeof colorSpotter.pickColorPosition).toEqual('number');
    expect(colorSpotter.colorItems.length).toEqual(9);
  });
});
