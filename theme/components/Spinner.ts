import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const baseStyle = defineStyle((props) => {
  const { emptyColor, color } = props;

  return {
    borderColor: color || 'blue.500',
    borderBottomColor: emptyColor || useExtendedColorMode('blackAlpha.200', 'whiteAlpha.200'),
    borderLeftColor: emptyColor || useExtendedColorMode('blackAlpha.200', 'whiteAlpha.200'),
  };
});

const Spinner = defineStyleConfig({
  baseStyle,
  defaultProps: {
    size: 'md',
  },
});

export default Spinner;
