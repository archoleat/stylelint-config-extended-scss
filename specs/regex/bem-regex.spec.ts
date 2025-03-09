import { describe, expect, test as spec } from 'bun:test';

import { CSSRules } from '#rules/css.ts';

describe('BEM Class Regex', () => {
  const BEMClassRegex = new RegExp(`${CSSRules['selector-class-pattern'][0]}`);

  describe('Valid BEM classes', () => {
    const validClasses = [
      'block',
      'block-name',
      'block-name-123',
      'block--modifier',
      'block-name--modifier-name',
      'block-name--modifier',
      'block--modifier-name',
      'block__element',
      'block-name__element-name',
      'block-name__element',
      'block__element-name',
      'block__element--modifier',
      'block-name__element-name--modifier-name',
      'block-name__element-name--modifier',
      'block-name__element--modifier-name',
      'block__element-name--modifier-name',
    ];

    for (const className of validClasses) {
      spec(`should accept "${className}"`, () => {
        expect(className).toMatch(BEMClassRegex);
      });
    }
  });

  describe('Invalid BEM classes', () => {
    const invalidClasses = [
      'block__element_modifier',
      'Block',
      'BlockElement',
      '123',
    ];

    for (const className of invalidClasses) {
      spec(`should reject "${className}"`, () => {
        expect(className).not.toMatch(BEMClassRegex);
      });
    }
  });
});
