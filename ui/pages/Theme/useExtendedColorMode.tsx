import { useColorMode } from '@chakra-ui/react';

const colorToIndex = {
  light: 0,
  dark: 1,
  red: 2,
};

export default function useExtendedColorMode(...props) {
  const { colorMode } = useColorMode();
  return props[colorToIndex[colorMode]] ?? props[0];
}
