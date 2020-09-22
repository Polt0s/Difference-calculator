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
    const {
      key, type, value, oldValue, newValue, children,
    } = tree;
    switch (type) {
      case 'added':
        return `Property '${data}${key}' was added with value: ${formatValue(value)}`;
      case 'deleted':
        return `Property '${data}${key}' was deleted`;
      case 'unchanged':
        return `Property '${data}${key}' unchanged`;
      case 'nested':
        return formatPlain(children, `${data}${key}.`);
      case 'changed':
        return `Property '${data}${key}' was changed from ${formatValue(newValue)} to ${formatValue(oldValue)}`;
      default:
        throw new Error(`Unknown order state: '${type}'!`);
    }
  });
  return output.join('\n');
};

export default formatPlain;
