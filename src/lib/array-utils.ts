// eslint-disable-next-line import/prefer-default-export
export const arrayFirst = <T extends Array<any>>(
  array: T
): T extends Array<infer U> ? U : never | undefined => {
  if (Array.isArray(array) && array.length) {
    return array[0];
  }
  return undefined;
};

export const flattenFirst = <T extends any>(
  arrayOrObject: Array<T> | T
): T | undefined => {
  if (Array.isArray(arrayOrObject)) {
    if (arrayOrObject.length > 0) {
      return arrayOrObject[0];
    }
    return undefined;
  }
  return arrayOrObject;
};
