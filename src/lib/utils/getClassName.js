import { isObjectEmpty, buildClassName } from './helpers';

/**
 * Return a class name built from props
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.color
 * @return {string}
 */

export const getClassName = (props) => {
  if (!props || isObjectEmpty(props)) {
    throw Error(ERROR_MESSAGE.props);
  }

  const { className, color, size } = props;

  if (!className) {
    throw Error(ERROR_MESSAGE.className);
  }

  let classNameBuiltFromProps = buildClassName(className);

  if (color) {
    classNameBuiltFromProps = `${classNameBuiltFromProps} ${className}_${buildClassName(
      color
    )}-color`;
  }
  if (size) {
    classNameBuiltFromProps = `${classNameBuiltFromProps} ${className}_${buildClassName(
      size
    )}-size`;
  }
  return classNameBuiltFromProps;
};

export const ERROR_MESSAGE = {
  props: 'props is undefined or is an empty object',
  className: 'className value is required',
};
