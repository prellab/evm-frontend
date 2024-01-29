import { Tooltip as TooltipComponent } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { cssVar } from '@chakra-ui/theme-tools';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const $bg = cssVar('tooltip-bg');
const $fg = cssVar('tooltip-fg');
const $arrowBg = cssVar('popper-arrow-bg');

const variantNav = defineStyle(() => {
  return {
    bg: useExtendedColorMode('blue.50', 'gray.800'),
    color: 'blue.400',
    padding: '15px 12px',
    minWidth: '120px',
    borderRadius: 'base',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center',
    boxShadow: 'none',
    fontWeight: '500',
  };
});

const variants = {
  nav: variantNav,
};

const baseStyle = defineStyle((props) => {
  const bg = useExtendedColorMode('gray.700', 'gray.200');
  const fg = useExtendedColorMode('white', 'black');

  return {
    bg: $bg.reference,
    color: $fg.reference,
    [$bg.variable]: `colors.${ bg }`,
    [$fg.variable]: `colors.${ fg }`,
    [$arrowBg.variable]: $bg.reference,
    maxWidth: props.maxWidth || props.maxW || 'unset',
  };
});

const Tooltip = defineStyleConfig({
  variants,
  baseStyle,
});

TooltipComponent.defaultProps = { ...TooltipComponent.defaultProps, hasArrow: true };

export default Tooltip;
