import _ from 'lodash';
import fs from 'fs';
import path from 'path';

const getFileComparisons = (object1, object2) => {
  const fullPath1 = path.resolve(process.cwd(), object1);
  const fullPath2 = path.resolve(process.cwd(), object2);
  const fileContents1 = fs.readFileSync(fullPath1, 'utf8');
  const fileContents2 = fs.readFileSync(fullPath2, 'utf8');
  const config1 = path.extname(object1);
  const config2 = path.extname(object2);
  const fileParse1 = JSON.parse(fileContents1, config1);
  const fileParse2 = JSON.parse(fileContents2, config2);
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
