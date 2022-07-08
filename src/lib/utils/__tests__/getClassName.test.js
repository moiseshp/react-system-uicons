import { getClassName, ERROR_MESSAGE } from '../getClassName';

describe('getClassName()', () => {
  it('Props is undefined or is an empty object', () => {
    expect(getClassName).toThrowError(ERROR_MESSAGE.props);
    expect(() => getClassName({})).toThrowError(ERROR_MESSAGE.props);
  });

  it('className value is required', () => {
    const props = {
      className: '',
    };
    expect(() => getClassName(props)).toThrowError(ERROR_MESSAGE.className);
  });

  it('the function should return a class name built from the props', () => {
    let props = {
      className: 'SystemUIcons',
    };
    let className = getClassName(props);
    expect(className).toEqual('SystemUIcons');

    props = {
      ...props,
      color: 'primary',
    };
    className = getClassName(props);
    expect(className).toEqual('SystemUIcons SystemUIcons_primary-color');

    props = {
      ...props,
      size: 'small',
    };
    className = getClassName(props);
    expect(className).toEqual('SystemUIcons SystemUIcons_primary-color SystemUIcons_small-size');
  });
});
