import { chakra, Icon } from '@chakra-ui/react';
import React from 'react';

import tokenPlaceholderIcon from 'icons/token-placeholder.svg';
import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const TokenLogoPlaceholder = ({ className }: { className?: string }) => {
  const bgColor = useExtendedColorMode('gray.200', 'gray.600');
  const color = useExtendedColorMode('gray.400', 'gray.200');

  return (
    <Icon
      className={ className }
      fontWeight={ 600 }
      bgColor={ bgColor }
      color={ color }
      borderRadius="base"
      as={ tokenPlaceholderIcon }
      transitionProperty="background-color,color"
      transitionDuration="normal"
      transitionTimingFunction="ease"
    />
  );
};

export default chakra(TokenLogoPlaceholder);
