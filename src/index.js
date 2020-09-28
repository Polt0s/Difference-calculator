import path from 'path';
import buildAst from './AST.js';
import getFileContent from './readingFile.js';
import parsers from './parsers.js';
import getFormatter from './formatters/index.js';

const getNewformat = (file) => {
  const newFormat = getFileContent(file);
  const newWay = path.extname(file);
  return parsers(newFormat, newWay);
};

const gendiff = (filepath1, filepath2, format) => {
  const fileToPath1 = getNewformat(filepath1);
  const fileToPath2 = getNewformat(filepath2);
  const ast = buildAst(fileToPath1, fileToPath2);
  return getFormatter(ast, format);
};
export default gendiff;
