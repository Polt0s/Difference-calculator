import path from 'path';
import buildAst from './treeBuilder.js';
import getFileContent from './readingFile.js';
import parse from './parsers.js';
import format from './formatters/index.js';

const getData = (filePath) => {
  const contentFile = getFileContent(filePath);
  const fileFormat = path.extname(filePath);
  return parse(contentFile, fileFormat);
};

const gendiff = (filepath1, filepath2, outputFormat) => {
  const parseInputFile = getData(filepath1);
  const parseOutputFile = getData(filepath2);
  const ast = buildAst(parseInputFile, parseOutputFile);
  return format(ast, outputFormat);
};
export default gendiff;
