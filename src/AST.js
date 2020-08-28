import _ from 'lodash';
import path from 'path';
import getWay from './readingFile.js';

const getParsingFile = (object) => {
  const way = getWay(object);
  const name = path.extname(way);
  return JSON.parse(way, name);
};

const getFileComparisons = (object1, object2) => {
  const fileParse1 = getParsingFile(object1);
  const fileParse2 = getParsingFile(object2);
  const allKeys = _.union(Object.keys(fileParse1), Object.keys(fileParse2)).sort();
  const compare = allKeys.map((key) => {
    if (!_.has(fileParse1, key)) {
      return { key, type: 'added', value: fileParse2[key] };
    }
    if (!_.has(fileParse2, key)) {
      return { key, type: 'delete', value: fileParse1[key] };
    }
    if (fileParse1[key] === fileParse2[key]) {
      return { key, type: 'unchanged', value: fileParse1[key] };
    }
    if (_.isPlainObject(fileParse1[key]) && _.isPlainObject(fileParse2[key])) {
      return { key, type: 'modified', value: getFileComparisons(fileParse1[key], fileParse2[key]) };
    }
    return {
      key,
      type: 'changed',
      value1: fileParse1[key],
      value2: fileParse2[key],
    };
  });
  return compare;
};
export default getFileComparisons;
