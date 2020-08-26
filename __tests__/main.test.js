// import { test, expect } from '@jest/globals';
import genDiff from '../src/gendiff.js';
import fs from 'fs';
import path from 'path';
import url from 'url';

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(path.__filename);

const getFixturePath = (filename) => path.join(process.cwd(), '..', 'frontend-project-lvl2/__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const formats = [
  ['json', 'json']
  ['yaml', 'yaml']
  ['ini', 'ini']
];

test.each(formats)('genDiff', (formatFile, formatResult) => {
  const firstFile = getFixturePath(`filepath1.${formatFile}`)
  const secondFile = getFixturePath(`filepath2.${formatFile}`)
  const output = ['output.json.txt'];
  const result = output.filter((item) => item.includes(`${formatResult}`)).join('');
  const expected = readFile(result);
  expect(genDiff(firstFile, secondFile, formatResult)).toEqual(expected);
});



