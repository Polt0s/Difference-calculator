import fs from 'fs';
import path from 'path';
import url from 'url';
// import { TestScheduler } from 'jest';
import gendiff from '../src/gendiff.js';

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(path.__filename);

const getFixturePath = (filename) => path.join(process.cwd(), '..', 'frontend-project-lvl2/__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


test.each([
  ['json', 'json', 'output.json.txt'],
  ['json', 'output.stylish.txt'],
  ['json', 'json', 'output.plain.txt'],
  ['yaml', 'output.stylish.txt'],
  ['ini', 'output.stylish.txt'],
])('gendiff(%s, %s)', (isFile, expectedFile, format) => {
  const firstFile = getFixturePath(`filepath1.${isFile}`);
  const secondFile = getFixturePath(`filepath2.${isFile}`);
  const newFormat = format = '';
  const output = readFile(expectedFile);
  expect(gendiff(firstFile, secondFile, newFormat)).toBe(output);
});
