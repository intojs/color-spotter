import {getColorSpotterMock} from "../../mocks/color-spotter.mock";
import {
  GET_INITIAL_LEVEL,
  INCREASE_LEVEL,
  getInitialLevelAction,
  increaseLevelAction
} from "./color-spotter.actions";

describe('color-spotter.actions', () => {
  it('should create initialLevelAction', () => {
    const colorSpotter = getColorSpotterMock();
    const payload = getInitialLevelAction(colorSpotter);
    expect(payload).toEqual({
      type: GET_INITIAL_LEVEL,
      colorSpotter
    });
  });

  it('should create increaseLevelAction', () => {
    const currentColorSpotter = getColorSpotterMock({
      level: 1,
      numberOfColorItemsPerRow: 3
    });
    const payload = increaseLevelAction(currentColorSpotter);
    expect(payload.type).toEqual(INCREASE_LEVEL);
    expect(payload.colorSpotter.level).toEqual(2);
    expect(payload.colorSpotter.numberOfColorItemsPerRow).toEqual(4);
  });
});
