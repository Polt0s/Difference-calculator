import _ from 'lodash';

const checkObject = (obj) => _.isPlainObject(obj);

const formatValue = (value) => {
  if (checkObject(value)) {
    return '[complex value]';
  }
  return value;
};

const formatPlain = (ast) => {
  const output = (node, parents) => {
    const {
      key, type, value, oldValue, newValue, children,
    } = node;
    switch (type) {
      case 'added':
        return [`Property '${[...parents, key].join('.')}' was added with value: ${formatValue(value)}`];
      case 'deleted':
        return [`Property '${[...parents, key].join('.')}' was deleted`];
      case 'unchanged':
        return [`Property '${[...parents, key].join('.')}' unchanged`];
      case 'nested':
        return [...children.map((item) => output(item, [...parents, key]))].flat();
      case 'changed':
        return [`Property '${[...parents, key].join('.')}' was changed from ${formatValue(newValue)} to ${formatValue(oldValue)}`];
      default:
        throw new Error(`Unknown order state: '${type}'!`);
    }
  };
  const result = ast.map((item) => output(item, [])).flat();
  return result.join('\n');
};

export default formatPlain;
