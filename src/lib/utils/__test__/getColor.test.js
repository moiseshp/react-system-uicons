import { getColor, ERROR_MESSAGE } from '../getColor';

describe('getColor()', () => {
  it('Props is undefined or is an empty object', () => {
    expect(getColor).toThrowError(ERROR_MESSAGE.props);
    expect(() => getColor({})).toThrowError(ERROR_MESSAGE.props);
  });

  it('Value pallete.default is required if color value is not found', () => {
    const props = {
      pallete: {
        default: '',
      },
    };
    expect(() => getColor(props)).toThrowError(ERROR_MESSAGE.defaultPallete);
  });

  it('if the color value does not exist, return the default color from the palette', () => {
    const props = {
      pallete: {
        default: '#F00',
      },
    };
    const color = getColor(props);
    expect(color).toEqual('#F00');
  });

  it('if the color value exists and the color is a property of the palette object, return the found palette value', () => {
    const props = {
      color: 'primary',
      pallete: {
        primary: '#F0F',
      },
    };
    const color = getColor(props);
    expect(color).toEqual('#F0F');
  });

  it('if the color value exists and the color is not a property of the palette object return color value', () => {
    const props = {
      color: 'custom-name-color',
      pallete: {
        primary: '#F0F',
      },
    };
    const color = getColor(props);
    expect(color).toEqual('custom-name-color');
  });
});
