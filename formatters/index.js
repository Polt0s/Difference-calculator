import getNewTree from '../src/buildAST.js';
import getFormatPlain from './plain.js'

const formatter = (data, format) => {
  switch (format) {
    case 'stylish':
      return getNewTree(data, '');
    case 'plain':
      return getFormatPlain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      return null;
  }
};

export default formatter;
