import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

import * as themes from './themes';

export default function useThemeColors() {
  const theme = useExtendedColorMode(themes.light, themes.dark);
  return theme.colors;
}
