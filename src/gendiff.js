import getFileComparisons from './AST.js';
import getWay from './readingFile.js';
import parsers from './parsers.js'
import path from 'path';
import getNewTree from './buildAST.js';

const getNewformat = (file) => {
  const newFormat = getWay(file);
  const newWay = path.extname(file);
  return parsers(newFormat, newWay);
}

const genDiff = (filepath1, filepath2, format) => {
  const fileToPath1 = getNewformat(filepath1);
  const fileToPath2 = getNewformat(filepath2);
  const ast = getFileComparisons(fileToPath1, fileToPath2);
  return getNewTree(ast, format);
};
export default genDiff;
