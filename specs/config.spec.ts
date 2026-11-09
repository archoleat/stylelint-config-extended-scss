import { describe, expect, test as spec } from 'bun:test';

import stylelint from 'stylelint';

import config from '../src/index.ts';

describe('Consumer configuration', () => {
  spec('should load all configured plugin rules', async () => {
    const result = await stylelint.lint({
      code: '.block {\n  color: #fff;\n}\n',
      codeFilename: 'fixture.scss',
      config,
    });

    expect(result.errored).toBe(false);
    expect(result.results[0]?.warnings).toEqual([]);
  });

  spec('should retain defensive background image checks', async () => {
    const result = await stylelint.lint({
      code: '.block {\n  background-image: url("image.webp");\n}\n',
      codeFilename: 'fixture.scss',
      config,
    });

    expect(
      result.results[0]?.warnings.some(
        (warning) => warning.rule === 'defensive-css/require-background-repeat',
      ),
    ).toBe(true);
  });
});
