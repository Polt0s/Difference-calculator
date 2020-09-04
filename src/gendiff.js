import path from 'path';
import getFileComparisons from './AST.js';
import getWay from './readingFile.js';
import parsers from './parsers.js';
import formatter from '../formatters/index.js';

const getNewformat = (file) => {
  const newFormat = getWay(file);
  const newWay = path.extname(file);
  return parsers(newFormat, newWay);
};

const genDiff = (filepath1, filepath2, format) => {
  const fileToPath1 = getNewformat(filepath1);
  const fileToPath2 = getNewformat(filepath2);
  const ast = getFileComparisons(fileToPath1, fileToPath2);
  return formatter(ast, format);
};
export default genDiff;
