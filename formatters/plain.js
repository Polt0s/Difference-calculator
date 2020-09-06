import _ from 'lodash';

const checkObject = (obj) => _.isPlainObject(obj);

const getAllValue = (value) => {
  if (checkObject(value)) {
    return '[complex value]';
  };
  return value;
};

const getFormatPlain = (obj, data = '') => {
  const output = obj.map((tree) => {
    switch (tree.type) {
      case 'added':
        return `Property '${data}${tree.key}' was added with value: ${getAllValue(tree.value)}`;
      case 'delete':
        return `Property '${data}${tree.key}' was removed`;
      case 'unchanged':
        return `Property '${data}${tree.key}' no change`;
      case 'nested':
        return getFormatPlain(tree.children);
      case 'changed':
        return `Property '${data}${tree.key}' was updated. From ${getAllValue(tree.newValue)} to ${getAllValue(tree.oldValue)}`;
      default:
        return `${tree.type} - the value is wrong`;
    }
  });
  return output.join('\n');
};

export default getFormatPlain;
