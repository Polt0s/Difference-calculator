import fs from 'fs';
import path from 'path';

const getFileContent = (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const content = fs.readFileSync(absolutePath, 'utf8');
  return content;
};

export default getFileContent;
