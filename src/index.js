import path from 'path';
import buildAst from './treeBuilder.js';
import getFileContent from './readingFile.js';
import parse from './parsers.js';
import getFormat from './formatters/index.js';

const getData = (filePath) => {
  const newFormat = getFileContent(filePath);
  const newWay = path.extname(filePath);
  return parse(newFormat, newWay);
};

const gendiff = (filepath1, filepath2, format) => {
  const fileToData1 = getData(filepath1);
  const fileToData2 = getData(filepath2);
  const ast = buildAst(fileToData1, fileToData2);
  return getFormat(ast, format);
};
export default gendiff;
