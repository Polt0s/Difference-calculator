import _ from 'lodash';

const checkObject = (obj) => _.isPlainObject(obj);

const formatValue = (value) => {
  if (checkObject(value)) {
    return '[complex value]';
  }
  return value;
};

const formatPlain = (obj, data = '') => {
  const output = obj.map((tree) => {
    switch (tree.type) {
      case 'added':
        return `Property '${data}${tree.key}' was added with value: ${formatValue(tree.value)}`;
      case 'deleted':
        return `Property '${data}${tree.key}' was deleted`;
      case 'unchanged':
        return `Property '${data}${tree.key}' unchanged`;
      case 'nested':
        return formatPlain(tree.children, `${data}${tree.key}.`);
      case 'changed':
        return `Property '${data}${tree.key}' was changed from ${formatValue(tree.newValue)} to ${formatValue(tree.oldValue)}`;
      default:
        throw new Error(`Unknown order state: '${tree.type}'!`);
    }
  });
  return output.join('\n');
};

export default formatPlain;
