import fs from 'fs';
import path from 'path';

const getWay = (file) => {
  const absolutePath = path.resolve(process.cwd(), file);
  const fileСontents = fs.readFileSync(absolutePath, 'utf8');
  return fileСontents;
};

export default getWay;