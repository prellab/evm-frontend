import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { Input as InputComponent } from '@chakra-ui/react';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';
import getOutlinedFieldStyles from '../utils/getOutlinedFieldStyles';

const size = {
  xs: defineStyle({
    fontSize: 'md',
    lineHeight: '24px',
    px: '8px',
    py: '4px',
    h: '32px',
    borderRadius: 'base',
  }),
  sm: defineStyle({
    fontSize: 'md',
    lineHeight: '24px',
    px: '8px',
    py: '12px',
    h: '40px',
    borderRadius: 'base',
  }),
  md: defineStyle({
    fontSize: 'md',
    lineHeight: '20px',
    px: '20px',
    py: '20px',
    h: '60px',
    borderRadius: 'base',
  }),
  lg: defineStyle({
    fontSize: 'md',
    lineHeight: '20px',
    px: '24px',
    py: '28px',
    h: '80px',
    borderRadius: 'base',
  }),
};

const variantOutline = definePartsStyle((props) => {
  const transitionProps = getDefaultTransitionProps();

  return {
    field: getOutlinedFieldStyles(props),
    addon: {
      border: '2px solid',
      borderColor: 'transparent',
      bg: useExtendedColorMode('blackAlpha.100', 'whiteAlpha.200'),
      color: useExtendedColorMode('blackAlpha.800', 'whiteAlpha.800'),
      ...transitionProps,
    },
  };
});

const sizes = {
  xs: definePartsStyle({
    field: size.xs,
    addon: size.xs,
  }),
  sm: definePartsStyle({
    field: size.sm,
    addon: size.sm,
  }),
  md: definePartsStyle({
    field: size.md,
    addon: size.md,
  }),
  lg: definePartsStyle({
    field: size.lg,
    addon: size.lg,
  }),
};

const variants = {
  outline: variantOutline,
};

const Input = defineMultiStyleConfig({
  sizes,
  variants,
  defaultProps: {
    size: 'md',
  },
});

InputComponent.defaultProps = {
  ...InputComponent.defaultProps,
  placeholder: ' ',
};

export default Input;
