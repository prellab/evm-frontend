/* eslint-disable react-hooks/rules-of-hooks */
import type { StyleFunctionProps } from '@chakra-ui/theme-tools';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

import scrollbar from './foundations/scrollbar';
import getDefaultTransitionProps from './utils/getDefaultTransitionProps';

const global = (props: StyleFunctionProps) => ({
  body: {
    bg: useExtendedColorMode('white', 'black', 'red'),
    ...getDefaultTransitionProps(),
    '-webkit-tap-highlight-color': 'transparent',
    'font-variant-ligatures': 'no-contextual',
  },
  mark: {
    bgColor: useExtendedColorMode('green.100', 'green.800', 'red'),
    color: 'inherit',
  },
  'svg *::selection': {
    color: 'none',
    background: 'none',
  },
  form: {
    w: '100%',
  },
  ...scrollbar(props),
});

export default global;
