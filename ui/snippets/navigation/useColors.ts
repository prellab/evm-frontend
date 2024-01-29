import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

export default function useColors() {
  return {
    text: {
      'default': useExtendedColorMode('gray.600', 'gray.400', 'red.400'),
      active: useExtendedColorMode('blue.700', 'gray.50', 'red.50'),
      hover: 'link_hovered',
    },
    bg: {
      'default': 'transparent',
      active: useExtendedColorMode('blue.50', 'gray.800', 'red.800'),
    },
    border: {
      'default': 'divider',
      active: useExtendedColorMode('blue.50', 'gray.800', 'red.800'),
    },
  };
}
