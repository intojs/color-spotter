import {colorSpotterReducer} from "./color-spotter.reducer";
import {GET_INITIAL_LEVEL, INCREASE_LEVEL} from "./color-spotter.actions";
import {getColorSpotterMock} from "../../mocks/color-spotter.mock";

describe('colorSpotterReducer', () => {
  it('should handle initial state', () => {
    const fakeAction = {
      type: 'FAKE_ACTION'
    };
    expect(colorSpotterReducer(undefined, fakeAction)).toEqual(null);
  });

  it(`should handle ${GET_INITIAL_LEVEL}`, () => {
    const colorSpotter = getColorSpotterMock();
    const fakeAction = {
      type: GET_INITIAL_LEVEL,
      colorSpotter
    };
    expect(colorSpotterReducer(undefined, fakeAction)).toEqual(colorSpotter);
  });

  it(`should handle ${INCREASE_LEVEL}`, () => {
    const colorSpotter = getColorSpotterMock();
    const fakeAction = {
      type: INCREASE_LEVEL,
      colorSpotter
    };
    expect(colorSpotterReducer(undefined, fakeAction)).toEqual(colorSpotter);
  });
});
