import _ from 'lodash';

const convertToString = (value, data) => {
  if (!_.isObject(value)) {
    return value;
  }
  const newKeys = Object.keys(value);
  const searchKeys = newKeys.map((key) => `      ${key}: ${value[key]}`);
  if (_.isObject(value)) {
    const newObj = searchKeys.join(' \n ');
    return `{\n${data}${newObj}\n${data}  }`;
  }
  return `wrong format - ${value}`;
};

const getNewTree = (obj, data) => {
  const statusKeys = obj
    .map((tree) => {
      const {
        key, type, value, oldValue, newValue, children,
      } = tree;
      switch (type) {
        case 'added':
          return `${data}+ ${key}: ${convertToString(value, data)}`;
        case 'delete':
          return `${data}- ${key}: ${convertToString(value, data)}`;
        case 'unchanged':
          return `${data}  ${key}: ${convertToString(value, data)}`;
        case 'changed':
          return [`${data}- ${key}: ${convertToString(newValue, data)}`, `${data}+ ${key}: ${convertToString(oldValue, data)}`];
        case 'nested':
          return `  ${data}${key}: {\n${getNewTree(children, `${data}    `)}\n${data}  }`;
        default:
          return `wrong data type - ${type}`;
      }
    })
    .flat();
  const output = statusKeys.join('\n');
  return `{\n${output}\n}`
};

export default getNewTree;
