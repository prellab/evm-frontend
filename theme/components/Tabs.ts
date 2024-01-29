import { tabsAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
} from '@chakra-ui/styled-system';
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

import Button from './Button/Button';

const variantSoftRounded = definePartsStyle(() => {
  return {
    tab: {
      borderRadius: 'base',
      fontWeight: '600',
      color: useExtendedColorMode('blue.700', 'gray.400'),
      _selected: {
        color: useExtendedColorMode('blue.700', 'gray.50'),
        bg: useExtendedColorMode('blue.50', 'gray.800'),
        _hover: {
          color: useExtendedColorMode('blue.700', 'gray.50'),
        },
      },
      _hover: {
        color: 'link_hovered',
      },
      _focusVisible: {
        boxShadow: { base: 'none', lg: 'outline' },
      },
    },
  };
});

const variantOutline = definePartsStyle((props) => {
  return {
    tab: {
      ...Button.variants?.outline(props),
      ...Button.baseStyle,
      _selected: Button.variants?.outline(props)._active,
    },
  };
});

const sizes = {
  sm: definePartsStyle({
    tab: Button.sizes?.sm,
  }),
  md: definePartsStyle({
    tab: Button.sizes?.md,
  }),
};

const variants = {
  'soft-rounded': variantSoftRounded,
  outline: variantOutline,
};

const Tabs = defineMultiStyleConfig({
  sizes,
  variants,
});

export default Tabs;
