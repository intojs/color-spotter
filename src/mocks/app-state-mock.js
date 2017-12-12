const getDefaults = () => ({
  gameStatus: null,
  colorSpotter: null
});

export const getAppStateMock = (partials) => ({
  ...getDefaults(),
  ...partials
});
