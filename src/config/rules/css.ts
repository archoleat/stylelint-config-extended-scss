import { BLOCK_REGEX, ELEMENT_REGEX, MODIFIER_REGEX } from '@archoleat/reglib';

import { messages } from '#data/messages.ts';

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
    `^(?:${BLOCK_REGEX})(?:${ELEMENT_REGEX})?(?:${MODIFIER_REGEX})?$`,
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
