import _ from 'lodash';

const formatValue = (value) => {
  if (_.isPlainObject(value)) {
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
  const result = ast.flatMap((item) => output(item, []));
  return result.join('\n');
};

export default formatPlain;
