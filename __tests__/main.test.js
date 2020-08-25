// import { test, expect } from '@jest/globals';
import probaTest from '../bin/main.js';


test('probaTest', () => {
  expect(probaTest(2, 2)).toBe(4);
});