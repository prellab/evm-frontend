import { Icon } from '@chakra-ui/react';
import React from 'react';

import nftIcon from 'icons/nft_shield.svg';
import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const NftFallback = () => {
  return (
    <Icon
      as={ nftIcon }
      p="50px"
      color={ useExtendedColorMode('blackAlpha.500', 'whiteAlpha.500') }
    />
  );
};

export default NftFallback;
