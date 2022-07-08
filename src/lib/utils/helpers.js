export const isObjectEmpty = (obj) => !Object.keys(obj).length;
export const removeWhitespace = (value) => String(value).replace(/\s+/g, '');
export const buildClassName = (value) =>
  removeWhitespace(String(value).replace(/[^a-z0-9_-]/gi, ''));
