const getDefaults = () => ({
  level: 1,
  numberOfColorItemsPerRow: 3,
  numberOfColorItems: 9,
  colorItemWidth: '33%',
  mainColorHue: 96,
  mainColorSaturation: 43,
  mainColorLightness: 33,
  mainColor: 'hsl(96, 43%, 33%)',
  pickColorSaturation: 4,
  pickColor: 'hsl(96, 4%, 31%)',
  pickColorPosition: 0,
  colorItems: [{
    color: 'hsl(96, 4%, 31%)',
    pickColor: true
  }]
});

export const getColorSpotterMock = (partials) => ({
  ...getDefaults(),
  ...partials
});
