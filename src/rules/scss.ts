const namedArguments = ['always', { ignore: ['single-argument'] }];

const SCSSRules = {
  'scss/at-each-key-value-single-line': true,
  'scss/at-function-named-arguments': namedArguments,
  'scss/at-mixin-named-arguments': namedArguments,
  'scss/at-root-no-redundant': true,
  'scss/at-use-no-redundant-alias': true,
  'scss/comment-no-loud': true,
  'scss/declaration-nested-properties': 'never',
  'scss/dimension-no-non-numeric-values': true,
  'scss/dollar-variable-colon-newline-after': 'always-multi-line',
  'scss/dollar-variable-empty-line-after': [
    'always',
    {
      except: ['last-nested', 'before-comment', 'before-dollar-variable'],
      ignore: ['before-comment', 'inside-single-line-block'],
    },
  ],
  'scss/dollar-variable-no-namespaced-assignment': true,
  'scss/double-slash-comment-inline': 'never',
  'scss/function-color-relative': true,
  'scss/map-keys-quotes': 'always',
  'scss/media-feature-value-dollar-variable': 'always',
  'scss/no-duplicate-dollar-variables': true,
  'scss/partial-no-import': true,
  'scss/property-no-unknown': true,
  'scss/selector-no-redundant-nesting-selector': true,
};

export { SCSSRules };
