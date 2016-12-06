export function toType (obj) {
  const item = ({}).toString.call(obj).match(/\s([a-zA-Z]+)/);
  return item[1].toLowerCase();
}

export function doesElementExist (node) {
  return !!(node && (node.nodeName || (node.prop && node.attr && node.find)));
}

export function parseOptions (options, defaultOptions) {
  Object.entries(options).forEach(([key, value]) => {
    const defKey = defaultOptions[key];
    const valueType = toType(value);
    const defKeyType = toType(defKey);

    if (defKeyType !== valueType) {
      throw new Error(`NativeTyped: Option "${key}" has wrong type. Should be ${defKeyType} but got ${valueType}.`);
    }
  });

  return true;
}
