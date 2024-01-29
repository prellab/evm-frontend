/* eslint-disable react-hooks/rules-of-hooks */
import type { StyleFunctionProps } from '@chakra-ui/theme-tools';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

export default function getDefaultFormColors(props: StyleFunctionProps) {
  const { focusBorderColor: fc, errorBorderColor: ec, filledBorderColor: flc } = props;
  return {
    focusBorderColor: fc || useExtendedColorMode('blue.500', 'blue.300'),
    focusPlaceholderColor: fc || 'gray.500',
    errorColor: ec || useExtendedColorMode('red.400', 'red.300'),
    filledColor: flc || useExtendedColorMode('gray.300', 'gray.600'),
  };
}
