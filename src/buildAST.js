import _ from 'lodash';

const convertToString = (value) => {
  if (!_.isObject(value)) {
    return value;
  }
  const newKeys = Object.keys(value);
  const searchKeys = newKeys.map((key) => `${key}: ${value[key]}`);
  return searchKeys;
};

const getNewTree = (obj) => {
  const statusKeys = obj.map((tree) => {
    const {
      key, type, value, oldValue, newValue,
    } = tree;
    switch (type) {
      case 'added':
        return `+ ${key}: ${convertToString(value)}`;
      case 'delete':
        return `- ${key}: ${convertToString(value)}`;
      case 'unchanged':
        return `  ${key}: ${convertToString(value)}`;
      case 'changed':
        return [`-${key}: ${convertToString(oldValue)}`,
        `+ ${key}:${convertToString(newValue)}`];
      case 'modified':
        return `${key}: ${getNewTree(convertToString(value))}`;
      default:
        return `wrong data type - ${type}`;
    }
  }).flat();
  const output = statusKeys.join('\n');
  return `{\n${output}\n}`;

};

export default getNewTree;
