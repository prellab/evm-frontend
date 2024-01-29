import { drawerAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { runIfFn } from '@chakra-ui/utils';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';

const transitionProps = getDefaultTransitionProps();

const baseStyleOverlay = defineStyle({
  ...transitionProps,
  bg: 'blackAlpha.800',
  zIndex: 'overlay',
});

const baseStyleDialog = defineStyle((props) => {
  const { isFullHeight } = props;

  return {
    ...(isFullHeight && { height: '100vh' }),
    ...transitionProps,
    zIndex: 'modal',
    maxH: '100vh',
    bg: useExtendedColorMode('white', 'gray.900'),
    color: 'inherit',
    boxShadow: useExtendedColorMode('lg', 'dark-lg'),
  };
});

const baseStyle = definePartsStyle((props) => ({
  overlay: baseStyleOverlay,
  dialog: runIfFn(baseStyleDialog, props),
}));

const Drawer = defineMultiStyleConfig({
  baseStyle,
});

export default Drawer;
