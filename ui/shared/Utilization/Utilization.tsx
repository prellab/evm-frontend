import { Box, Flex, chakra, Skeleton } from '@chakra-ui/react';
import clamp from 'lodash/clamp';
import React from 'react';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

interface Props {
  className?: string;
  value: number;
  colorScheme?: 'green' | 'gray';
  isLoading?: boolean;
}

const WIDTH = 50;

const Utilization = ({ className, value, colorScheme = 'green', isLoading }: Props) => {
  const valueString = (clamp(value * 100 || 0, 0, 100)).toLocaleString(undefined, { maximumFractionDigits: 2 }) + '%';
  const colorGrayScheme = useExtendedColorMode('gray.500', 'gray.400');
  const color = colorScheme === 'gray' ? colorGrayScheme : 'green.500';

  return (
    <Flex className={ className } alignItems="center" columnGap="10px">
      <Skeleton isLoaded={ !isLoading } w={ `${ WIDTH }px` } h="4px" borderRadius="full" overflow="hidden">
        <Box bg={ useExtendedColorMode('blackAlpha.200', 'whiteAlpha.200') } h="100%">
          <Box bg={ color } w={ valueString } h="100%"/>
        </Box>
      </Skeleton>
      <Skeleton isLoaded={ !isLoading } color={ color } fontWeight="bold">
        <span>
          { valueString }
        </span>
      </Skeleton>
    </Flex>
  );
};

export default React.memo(chakra(Utilization));
