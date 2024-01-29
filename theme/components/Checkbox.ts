import { checkboxAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
  cssVar,
} from '@chakra-ui/styled-system';
import { runIfFn } from '@chakra-ui/utils';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const $size = cssVar('checkbox-size');

const baseStyleControl = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    _checked: {
      bg: useExtendedColorMode(`${ c }.500`, `${ c }.300`),
      borderColor: useExtendedColorMode(`${ c }.500`, `${ c }.300`),
      _hover: {
        bg: useExtendedColorMode(`${ c }.600`, `${ c }.400`),
        borderColor: useExtendedColorMode(`${ c }.600`, `${ c }.400`),
      },
    },
    _indeterminate: {
      bg: useExtendedColorMode(`${ c }.500`, `${ c }.300`),
      borderColor: useExtendedColorMode(`${ c }.500`, `${ c }.300`),
    },
  };
});

const sizes = {
  sm: definePartsStyle({
    control: { [$size.variable]: 'sizes.3' },
    label: { fontSize: 'sm' },
    icon: { fontSize: '3xs' },
  }),
  md: definePartsStyle({
    control: { [$size.variable]: 'sizes.4' },
    label: { fontSize: 'md' },
    icon: { fontSize: '2xs' },
  }),
  lg: definePartsStyle({
    control: { [$size.variable]: 'sizes.5' },
    label: { fontSize: 'md' },
    icon: { fontSize: '2xs' },
  }),
};

const baseStyleLabel = defineStyle({
  _disabled: { opacity: 0.2 },
});

const baseStyle = definePartsStyle((props) => ({
  label: baseStyleLabel,
  control: runIfFn(baseStyleControl, props),
}));

const Checkbox = defineMultiStyleConfig({
  baseStyle,
  sizes,
});

export default Checkbox;
