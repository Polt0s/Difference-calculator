import _ from 'lodash';

const convertToString = (value, data) => {
  if (!_.isObject(value)) {
    return value;
  }
  const newKeys = Object.keys(value);
  const searchKeys = newKeys.map((key) => `          ${key}: ${value[key]}`);
  if (_.isObject(value)) {
    return `{\n${data}${searchKeys}\n${data}}`;
  }
  return `wrong format - ${value}`;
};
const indent = (depth, tab = '  ') => tab.repeat(depth);

const getNewTree = (ast) => {
  const iter = (ast, depth) => {
    const statusKeys = ast
      .map((tree) => {
        const {
          key, type, value, oldValue, newValue, children,
        } = tree;
        switch (type) {
          case 'added':
            return `${indent(depth)}    + ${key}: ${convertToString(value, depth + 1)}`;
          case 'delete':
            return `${indent(depth)}    - ${key}: ${convertToString(value, depth + 1)}`;
          case 'unchanged':
            return `${indent(depth)}      ${key}: ${convertToString(value, depth + 1)}`;
          case 'changed':
            return `${indent(depth)}    - ${key}: ${convertToString(newValue, depth + 1)}\n${indent(depth)}`
              + `${indent(depth)}    + ${key}: ${convertToString(oldValue, depth + 1)}\n${indent(depth)}`;
          case 'nested':
            return `${indent(depth)}      ${key}: ${iter(children, depth + 2)}`;
          default:
            return `wrong data type - ${type}`;
        }
      })
      .flat();
    return `{  \n${statusKeys.join('\n')}  \n${indent(depth)}}`;
    // const output = statusKeys.join('\n');
    // return `{\n${output}\n}`;
  }
  return iter(ast, 0)

};

export default getNewTree;
