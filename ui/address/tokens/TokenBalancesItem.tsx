import { Box, Flex, Icon, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';

import walletIcon from 'icons/wallet.svg';
import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const TokenBalancesItem = ({ name, value, isLoading }: {name: string; value: string; isLoading: boolean }) => {

  const bgColor = useExtendedColorMode('blackAlpha.50', 'whiteAlpha.50');

  return (
    <Flex p={ 5 } bgColor={ bgColor } borderRadius="16px" alignItems="center">
      <Icon as={ walletIcon } boxSize="30px" mr={ 3 }/>
      <Box>
        <Text variant="secondary" fontSize="xs">{ name }</Text>
        <Skeleton isLoaded={ !isLoading } fontWeight="500">{ value }</Skeleton>
      </Box>
    </Flex>
  );
};

export default React.memo(TokenBalancesItem);
