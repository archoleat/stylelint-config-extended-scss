import { readFileSync } from 'node:fs';
import { test, expect } from 'bun:test';
import stylelint from 'stylelint';

import config from '#src/index.ts';

const goodCss = readFileSync('./specs/styles/valid.scss', 'utf8');
const badCss = readFileSync('./specs/styles/invalid.scss', 'utf8');

test('Stylelint config should pass for valid CSS', async () => {
  const results = await stylelint.lint({
    code: goodCss,
    config,
  });

  expect(results.errored).toBe(false);
});

test('Stylelint config should fail for invalid CSS', async () => {
  const results = await stylelint.lint({
    code: badCss,
    config,
  });

  expect(results.errored).toBe(true);
});
