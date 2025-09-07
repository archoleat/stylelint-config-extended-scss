import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

import { experimental } from '../experimental.ts';

const experimentalProperty = experimental.property;
const boxModel = [
  await createPropertiesGroup({
    groupName: 'Margin',
    properties: [
      'margin',
      'margin-block',
      'margin-block-start',
      'margin-block-end',
      'margin-inline',
      'margin-inline-start',
      'margin-inline-end',
      experimentalProperty.marginTrim,
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Padding',
    properties: [
      'padding',
      'padding-block',
      'padding-block-start',
      'padding-block-end',
      'padding-inline',
      'padding-inline-start',
      'padding-inline-end',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Border',
    properties: [
      'border',
      'border-radius',
      'border-start-start-radius',
      'border-start-end-radius',
      'border-end-start-radius',
      'border-end-end-radius',
      'border-block',
      'border-block-width',
      'border-block-style',
      'border-block-color',
      'border-block-start',
      'border-block-start-width',
      'border-block-start-style',
      'border-block-start-color',
      'border-block-end',
      'border-block-end-width',
      'border-block-end-style',
      'border-block-end-color',
      'border-inline',
      'border-inline-width',
      'border-inline-style',
      'border-inline-color',
      'border-inline-start',
      'border-inline-start-width',
      'border-inline-start-style',
      'border-inline-start-color',
      'border-inline-end',
      'border-inline-end-width',
      'border-inline-end-style',
      'border-inline-end-color',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Box',
    properties: ['box-sizing', 'box-decoration-break', 'box-shadow'],
  }),
  await createPropertiesGroup({
    groupName: 'Size',
    properties: [
      'aspect-ratio',
      'block-size',
      'min-block-size',
      'max-block-size',
      'inline-size',
      'min-inline-size',
      'max-inline-size',
      experimentalProperty.interpolateSize,
      experimentalProperty.fieldSizing,
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Overflow',
    properties: [
      'overflow',
      'overflow-clip-margin',
      'overflow-block',
      'overflow-inline',
      'overflow-wrap',
      'overflow-anchor',
    ],
  }),
];

export { boxModel };
