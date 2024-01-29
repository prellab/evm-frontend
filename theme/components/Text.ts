import type { SystemStyleInterpolation } from '@chakra-ui/styled-system';
import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const variantPrimary = defineStyle(() => ({
  color: useExtendedColorMode('blackAlpha.800', 'whiteAlpha.800'),
}));

const variantSecondary = defineStyle(() => ({
  color: useExtendedColorMode('gray.500', 'gray.400'),
}));

const variantInherit = {
  color: 'inherit',
};

const variants: Record<string, SystemStyleInterpolation> = {
  primary: variantPrimary,
  secondary: variantSecondary,
  inherit: variantInherit,
};

const defaultProps = {
  variant: 'primary',
};

const Text = defineStyleConfig({
  defaultProps,
  variants,
});

export default Text;
