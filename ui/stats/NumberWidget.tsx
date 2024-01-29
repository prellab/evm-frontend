import { Box, Skeleton } from '@chakra-ui/react';
import React from 'react';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

type Props = {
  label: string;
  value: string;
  isLoading?: boolean;
}

const NumberWidget = ({ label, value, isLoading }: Props) => {
  const bgColor = useExtendedColorMode('blue.50', 'blue.800');
  const skeletonBgColor = useExtendedColorMode('blackAlpha.50', 'whiteAlpha.50');

  return (
    <Box
      bg={ isLoading ? skeletonBgColor : bgColor }
      px={ 3 }
      py={{ base: 2, lg: 3 }}
      borderRadius={ 12 }
    >
      <Skeleton
        isLoaded={ !isLoading }
        color="text_secondary"
        fontSize="xs"
        w="fit-content"
      >
        <span>{ label }</span>
      </Skeleton>

      <Skeleton
        isLoaded={ !isLoading }
        fontWeight={ 500 }
        fontSize="lg"
        w="fit-content"
      >
        { value }
      </Skeleton>
    </Box>
  );
};

export default NumberWidget;
