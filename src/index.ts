import { plugins } from '#config/plugins.js';
import { propertiesOrder } from '#properties/order.js';
import { CSSRules } from '#rules/css.js';
import { SCSSRules } from '#rules/scss.js';

export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-gamut',
    'stylelint-group-selectors',
    'stylelint-high-performance-animation',
    'stylelint-order',
    'stylelint-plugin-defensive-css',
    'stylelint-plugin-logical-css',
    'stylelint-rem-over-px',
  ],
  rules: {
    ...plugins,
    ...CSSRules,
    ...SCSSRules,
    ...propertiesOrder,
  },
};
