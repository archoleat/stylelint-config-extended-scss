import { selectors } from '@archoleat/reglib';

import { messages } from '#data';

const BLOCK = selectors.bem.BLOCK_REGEX;
const ELEMENT = selectors.bem.ELEMENT_REGEX;
const MODIFIER = selectors.bem.MODIFIER_REGEX;

const CSSRules = {
  'at-rule-disallowed-list': ['debug'],
  'at-rule-empty-line-before': [
    'always',
    {
      ignore: [
        'first-nested',
        'blockless-after-same-name-blockless',
        'after-comment',
      ],
      severity: 'warning',
    },
  ],
  'color-named': 'never',
  'declaration-no-important': true,
  'declaration-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['after-declaration', 'after-comment', 'inside-single-line-block'],
      severity: 'warning',
    },
  ],
  'font-weight-notation': 'numeric',
  'function-url-no-scheme-relative': true,
  'keyframe-selector-notation': 'percentage',
  'max-nesting-depth': [
    3,
    {
      ignore: ['blockless-at-rules'],
    },
  ],
  'media-feature-name-value-no-unknown': true,
  'no-descending-specificity': null,
  'no-unknown-animations': true,
  'selector-class-pattern': [
    `^${BLOCK}*${ELEMENT}?${MODIFIER}?$`,
    {
      message: messages.bem,
    },
  ],
  'selector-max-combinators': 4,
  'selector-max-compound-selectors': 3,
  'selector-max-id': 0,
  'selector-max-universal': 1,
  'selector-no-qualifying-type': true,
  'value-keyword-case': [
    'lower',
    {
      ignoreProperties: ['text-rendering'],
    },
  ],
};

export { CSSRules };
