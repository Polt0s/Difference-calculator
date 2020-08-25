import { test, expect } from '@jest/globals';
import probaTest from '../bin/main.js';

test('2 * 2 should return 4', () => {
  expect(probaTest(2, 2).toBe(4));
});