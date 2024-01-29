import { popoverAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { cssVar } from '@chakra-ui/theme-tools';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const $popperBg = cssVar('popper-bg');

const $arrowBg = cssVar('popper-arrow-bg');
const $arrowShadowColor = cssVar('popper-arrow-shadow-color');

const baseStylePopper = defineStyle({
  zIndex: 'popover',
});

const baseStyleContent = defineStyle(() => {
  const bg = useExtendedColorMode('white', 'gray.900');
  const shadowColor = useExtendedColorMode('blackAlpha.200', 'whiteAlpha.300');

  return {
    [$popperBg.variable]: `colors.${ bg }`,
    bg: $popperBg.reference,
    [$arrowBg.variable]: $popperBg.reference,
    [$arrowShadowColor.variable]: `colors.${ shadowColor }`,
    _dark: {
      [$popperBg.variable]: `colors.gray.900`,
      [$arrowShadowColor.variable]: `colors.whiteAlpha.300`,
      boxShadow: 'dark-lg',
    },
    width: 'xs',
    border: 'none',
    borderColor: 'inherit',
    borderRadius: 'md',
    boxShadow: '2xl',
    zIndex: 'inherit',
    _focusVisible: {
      outline: 0,
      boxShadow: '2xl',
    },
  };
});

const baseStyleHeader = defineStyle({
  px: 3,
  py: 2,
  borderBottomWidth: '1px',
});

const baseStyleBody = defineStyle({
  px: 4,
  py: 4,
});

const baseStyleFooter = defineStyle({
  px: 3,
  py: 2,
  borderTopWidth: '1px',
});

const baseStyleCloseButton = defineStyle({
  position: 'absolute',
  borderRadius: 'md',
  top: 1,
  insetEnd: 2,
  padding: 2,
});

const baseStyle = definePartsStyle((props) => ({
  popper: baseStylePopper,
  content: baseStyleContent(props),
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter,
  arrow: {},
  closeButton: baseStyleCloseButton,
}));

const Popover = defineMultiStyleConfig({
  baseStyle,
});

export default Popover;
