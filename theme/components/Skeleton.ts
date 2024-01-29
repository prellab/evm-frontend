import { Skeleton as SkeletonComponent } from '@chakra-ui/react';
import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { keyframes } from '@chakra-ui/system';
import { getColor } from '@chakra-ui/theme-tools';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const shine = () =>
  keyframes({
    to: { backgroundPositionX: '-200%' },
  });

const baseStyle = defineStyle((props) => {
  const defaultStartColor = useExtendedColorMode('blackAlpha.50', 'whiteAlpha.50');
  const defaultEndColor = useExtendedColorMode('blackAlpha.100', 'whiteAlpha.100');

  const { startColor = defaultStartColor, endColor = defaultEndColor, theme } = props;

  const start = getColor(theme, startColor);
  const end = getColor(theme, endColor);

  return {
    opacity: 1,
    borderRadius: 'md',
    borderColor: start,
    background: `linear-gradient(90deg, ${ start } 8%, ${ end } 18%, ${ start } 33%)`,
    backgroundSize: '200% 100%',
  };
});

const Skeleton = defineStyleConfig({
  baseStyle,
});

export default Skeleton;

SkeletonComponent.defaultProps = {
  ...SkeletonComponent.defaultProps,
  speed: 1,
  animation: `1s linear infinite ${ shine() }`,
};
