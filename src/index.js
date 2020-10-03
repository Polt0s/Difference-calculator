import path from 'path';
import buildAst from './treeBuilder.js';
import getFileContent from './readingFile.js';
import parse from './parsers.js';
import getFormat from './formatters/index.js';

const getNewformat = (file) => {
  const newFormat = getFileContent(file);
  const newWay = path.extname(file);
  return parse(newFormat, newWay);
};

const gendiff = (filepath1, filepath2, format) => {
  const fileToPath1 = getNewformat(filepath1);
  const fileToPath2 = getNewformat(filepath2);
  const ast = buildAst(fileToPath1, fileToPath2);
  return getFormat(ast, format);
};
export default gendiff;
