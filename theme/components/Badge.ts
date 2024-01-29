import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { transparentize } from '@chakra-ui/theme-tools';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const baseStyle = defineStyle({
  fontSize: 'xs',
  borderRadius: 'sm',
  fontWeight: 'bold',
});

const variantSubtle = defineStyle((props) => {
  const { colorScheme: c, theme } = props;
  const darkBg = transparentize(`${ c }.200`, 0.16)(theme);

  if (c === 'gray') {
    return {
      bg: useExtendedColorMode('blackAlpha.100', 'whiteAlpha.400'),
      color: useExtendedColorMode('gray.600', 'gray.50'),
    };
  }

  return {
    bg: useExtendedColorMode(`${ c }.50`, darkBg),
    color: useExtendedColorMode(`${ c }.500`, `${ c }.200`),
  };
});

const variants = {
  subtle: variantSubtle,
};

const Badge = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'subtle',
    colorScheme: 'gray',
  },
});

export default Badge;
