import getNewTree from './buildAST.js';
import getFileComparisons from './AST.js';

const genDiff = (filepath1, filepath2, format) => {
  const ast = getFileComparisons(filepath1, filepath2);
  const result = getNewTree(ast, format);
  return result;
};
export default genDiff;
