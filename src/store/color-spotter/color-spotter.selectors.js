export const getColorSpotter = (state) => state && state.colorSpotter ?
  state.colorSpotter :
  null;

export const getLevel = (state) => state && state.colorSpotter && state.colorSpotter.level ?
  state.colorSpotter.level :
  null;
