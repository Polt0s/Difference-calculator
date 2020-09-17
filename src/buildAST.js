import _ from 'lodash';

const indent = (depth, tab = '    ') => tab.repeat(depth);

const convertToString = (value, data) => {
  if (!_.isObject(value)) {
    return value;
  }
  const newKeys = Object.keys(value);
  const searchKeys = newKeys.map((key) => `    ${key}: ${value[key]}`);
  if (_.isObject(value)) {
    const output = ['{', searchKeys, '}'];
    return output.join(`\n${indent(data)}`);
  }
  return `wrong format - ${value}`;
};

const getNewTree = (object, depth = 0) => {
  const statusKeys = object
    .map((tree) => {
      const {
        key, type, value, oldValue, newValue, children,
      } = tree;
      switch (type) {
        case 'added':
          return `  + ${key}: ${convertToString(value, depth + 1)}`;
        case 'delete':
          return `  - ${key}: ${convertToString(value, depth + 1)}`;
        case 'unchanged':
          return `    ${key}: ${convertToString(value, depth)}`;
        case 'changed':
          return `  - ${key}: ${convertToString(newValue, depth + 1)}\n${indent(depth)}`
            + `  + ${key}: ${convertToString(oldValue, depth + 1)}`;
        case 'nested':
          return `    ${key}: ${getNewTree(children, depth + 1)}`;
        default:
          return `wrong data type - ${type}`;
      }
    })
    .flat();
  const output = ['{', ...statusKeys, '}'];
  return output.join(`\n${indent(depth)}`);
};

export default getNewTree;
