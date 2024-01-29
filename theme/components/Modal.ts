import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { Modal as ModalComponent } from '@chakra-ui/react';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { runIfFn } from '@chakra-ui/utils';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleDialog = defineStyle(() => {
  return {
    padding: 8,
    borderRadius: 'lg',
    bg: useExtendedColorMode('white', 'gray.900'),
    margin: 'auto',
  };
});

const baseStyleDialogContainer = defineStyle({
  '::-webkit-scrollbar': { display: 'none' },
  'scrollbar-width': 'none',
  // '@supports (height: -webkit-fill-available)': { height: '-webkit-fill-available' },
});

const baseStyleHeader = defineStyle(() => ({
  padding: 0,
  marginBottom: 8,
  fontSize: '2xl',
  lineHeight: 10,
  color: useExtendedColorMode('blackAlpha.800', 'whiteAlpha.800'),
}));

const baseStyleBody = defineStyle({
  padding: 0,
  marginBottom: 8,
  flex: 'initial',
});

const baseStyleFooter = defineStyle({
  padding: 0,
  justifyContent: 'flex-start',
});

const baseStyleCloseButton = defineStyle(() => {
  return {
    top: 8,
    right: 8,
    height: 10,
    width: 10,
    color: useExtendedColorMode('gray.700', 'gray.500'),
    _hover: { color: 'link_hovered' },
    _active: { bg: 'none' },
  };
});

const baseStyleOverlay = defineStyle({
  bg: 'blackAlpha.800',
});

const baseStyle = definePartsStyle((props) => ({
  dialog: runIfFn(baseStyleDialog, props),
  dialogContainer: baseStyleDialogContainer,

  header: runIfFn(baseStyleHeader, props),
  body: baseStyleBody,
  footer: baseStyleFooter,
  closeButton: runIfFn(baseStyleCloseButton, props),
  overlay: baseStyleOverlay,
}));

const sizes = {
  md: definePartsStyle({
    dialogContainer: {
      height: '100%',
    },
    dialog: {
      maxW: '760px',
    },
  }),
  full: definePartsStyle({
    dialogContainer: {
      height: '100%',
    },
    dialog: {
      maxW: '100vw',
      my: '0',
      borderRadius: '0',
      padding: '80px 16px 32px 16px',
      height: '100%',
      overflowY: 'scroll',
    },
    closeButton: {
      top: 4,
      right: 6,
      width: 6,
      height: 6,
    },
    header: {
      mb: 6,
    },
  }),
};

const Modal = defineMultiStyleConfig({
  sizes,
  baseStyle,
});

export default Modal;

ModalComponent.defaultProps = {
  ...ModalComponent.defaultProps,
  isCentered: true,
};
