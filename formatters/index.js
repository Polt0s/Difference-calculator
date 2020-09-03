import _ from 'lodash';
import getNewTree from '../src/buildAST.js';

const formatter = (data, format) => {
  switch (format) {
    case 'stylish':
      return getNewTree(data, '');
    default:
      return null;
  }
}

export default formatter;