import { describe, expect, test as spec } from 'bun:test';

import { CSSRules } from '#rules/css.ts';

const BEMClassRegex = new RegExp(`${CSSRules['selector-class-pattern'][0]}`);
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
const invalidClasses = ['block__element_modifier', 'Block', 'BlockElement', '123'];

describe('BEM Class Regex', () => {
  describe('Valid BEM classes', () => {
    validClasses.forEach((className) => {
      spec(`should accept "${className}"`, () => {
        expect(className).toMatch(BEMClassRegex);
      });
    });
  });

  describe('Invalid BEM classes', () => {
    invalidClasses.forEach((className) => {
      spec(`should reject "${className}"`, () => {
        expect(className).not.toMatch(BEMClassRegex);
      });
    });
  });
});
