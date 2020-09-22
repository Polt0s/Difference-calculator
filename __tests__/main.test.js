import fs from 'fs';
import path from 'path';
import gendiff from '../src/gendiff.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['json', 'Result-Format-Json.json', 'json'],
  ['json', 'Result-Format-Stylish.txt', 'stylish'],
  ['json', 'Result-Format-Plain.txt', 'plain'],
  ['ini', 'Result-Format-Stylish.txt', 'stylish'],
  ['yaml', 'Result-Format-Stylish.txt', 'stylish'],
])('gendiff(%#)', (isFile, expectedFile, format) => {
  const firstFile = getFixturePath(`BeginFile.${isFile}`);
  const secondFile = getFixturePath(`EndFile.${isFile}`);
  const output = readFile(expectedFile);
  expect(gendiff(firstFile, secondFile, format)).toBe(output);
});
