import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

export default function useColors() {
  return {
    text: {
      'default': useExtendedColorMode('gray.600', 'gray.400'),
      active: useExtendedColorMode('blackAlpha.900', 'whiteAlpha.900'),
      hover: useExtendedColorMode('blue.600', 'link_hovered'),
    },
    iconPlaceholder: {
      'default': useExtendedColorMode('blackAlpha.100', 'whiteAlpha.300'),
    },
    bg: {
      'default': 'transparent',
      active: useExtendedColorMode('blue.50', 'gray.800'),
    },
    border: {
      'default': 'divider',
      active: useExtendedColorMode('blue.50', 'gray.800'),
    },
  };
}
