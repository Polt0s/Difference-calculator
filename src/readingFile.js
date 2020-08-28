import fs from 'fs';
import path from 'path';

const getWay = (object) => {
  const absolutePath = path.resolve(process.cwd(), object);
  const fileСontents = fs.readFileSync(absolutePath, 'utf8');
  return fileСontents;
};

export default getWay;