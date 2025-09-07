const plugins = {
  'gamut/color-no-out-gamut-range': true,
  'plugin/stylelint-group-selectors': true,
  'plugin/declaration-block-no-ignored-properties': true,
  'plugin/no-low-performance-animation-properties': true,
  'plugin/use-defensive-css': [
    true,
    {
      'accidental-hover': true,
      'background-repeat': true,
      'custom-property-fallbacks': true,
      'flex-wrapping': true,
      'scroll-chaining': true,
      'scrollbar-gutter': true,
      'vendor-prefix-grouping': true,
    },
  ],
  'plugin/use-logical-properties-and-values': true,
  'plugin/use-logical-units': true,
  'rem-over-px/rem-over-px': true,
};

export { plugins };
