import { getWidthAndHeight, boxBuilder, ERROR_MESSAGE } from '../getWidthAndHeight';

describe('getWidthAndHeight()', () => {
  it('Props is undefined or is an empty object', () => {
    expect(getWidthAndHeight).toThrowError(ERROR_MESSAGE.props);
    expect(() => getWidthAndHeight({})).toThrowError(ERROR_MESSAGE.props);
  });

  it('sizeOptions is a value required', () => {
    let props = {
      sizeOptions: null,
    };
    expect(() => getWidthAndHeight(props)).toThrowError(ERROR_MESSAGE.sizeOptions);
    props = {
      sizeOptions: {},
    };
    expect(() => getWidthAndHeight(props)).toThrowError(ERROR_MESSAGE.sizeOptions);
  });

  it('if size value is undefined then return default option size value', () => {
    const props = {
      sizeOptions: {
        medium: 20,
      },
    };
    const box = getWidthAndHeight(props);
    expect(box).toEqual(boxBuilder(props.sizeOptions.medium));
  });

  it('if size value exists into sizeOptions then return your value assign', () => {
    const props = {
      size: 'large',
      sizeOptions: {
        large: 50,
      },
    };
    const box = getWidthAndHeight(props);
    expect(box).toEqual(boxBuilder(props.sizeOptions.large));
  });

  it('if size value is not exists into sizeOptions and size value is a number then return value of the size property', () => {
    const props = {
      size: 100,
      sizeOptions: {
        large: 50,
      },
    };
    const box = getWidthAndHeight(props);
    expect(box).toEqual(boxBuilder(props.size));
  });

  it('if size value is a string and is a css value valid return value of the size property', () => {
    const props = {
      size: '5.4rem',
      sizeOptions: {
        large: 50,
      },
    };
    const box = getWidthAndHeight(props);
    expect(box).toEqual(boxBuilder(props.size));
  });

  it('if size value is a string but is not a css value valid return medium value of the sizeOptions', () => {
    const props = {
      size: '#%5.4',
      sizeOptions: {
        medium: 50,
      },
    };
    const box = getWidthAndHeight(props);
    expect(box).toEqual(boxBuilder(props.sizeOptions.medium));
  });
});
