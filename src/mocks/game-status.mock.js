const getDefaults = () => ({
  hasStarted: false,
  isWon: false,
  isLost: false
});

export const getGameStatusMock = (partials) => ({
  ...getDefaults(),
  ...partials
});
