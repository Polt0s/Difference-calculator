import _ from 'lodash';
import fs from 'fs';
import path from 'path';

const getFileComparisons = (object1, object2) => {
  object1 = path.resolve('../__fixtures__/filepath1.json')
  object2 = path.resolve('../__fixtures__/filepath2.json')
  const newFile1 = fs.readFileSync(object1, 'utf8');
  const newFile2 = fs.readFileSync(object2, 'utf8');
  const newKey1 = JSON.parse(newFile1);
  const newKey2 = JSON.parse(newFile2);
  const keys = Object.keys(newKey1)
  const keys2 = Object.keys(newKey2)
  const allKeys = _.union(keys, keys2).sort();
  const compare = allKeys.map((key) => {
    if (!_.has(object1, key)) {
      return { key, type: 'added', value: object2[key] };
    }
    if (!_.has(object2, key)) {
      return { key, type: 'delete', value: object1[key] };
    }
    if (object1[key] === object2[key]) {
      return { key, type: 'unchanged', value: object1[key] };
    }
    return { key, type: 'changed', value1: object1[key], value2: object2[key] };
  })
  return JSON.stringify(compare, undefined, 1);
}
console.log(getFileComparisons());


