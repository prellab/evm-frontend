import { switchAnatomy as parts } from '@chakra-ui/anatomy';
import { defineStyle, createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleTrack = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    _checked: {
      bg: useExtendedColorMode(`${ c }.500`, `${ c }.300`),
      _hover: {
        bg: useExtendedColorMode(`${ c }.600`, `${ c }.400`),
      },
    },
  };
});

const baseStyle = definePartsStyle((props) => ({
  track: baseStyleTrack(props),
}));

const Switch = defineMultiStyleConfig({
  baseStyle,
});

export default Switch;
