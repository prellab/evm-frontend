import type { As } from '@chakra-ui/react';
import { Skeleton, Box, Button, Circle, Icon } from '@chakra-ui/react';
import React from 'react';

import filterIcon from 'icons/filter.svg';
import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const FilterIcon = <Icon as={ filterIcon } boxSize={ 5 } mr={{ base: 0, lg: 2 }}/>;

interface Props {
  isActive?: boolean;
  isLoading?: boolean;
  appliedFiltersNum?: number;
  onClick: () => void;
  as?: As;
}

const FilterButton = ({ isActive, isLoading, appliedFiltersNum, onClick, as }: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const badgeColor = useExtendedColorMode('white', 'black');
  const badgeBgColor = useExtendedColorMode('blue.700', 'gray.50');

  if (isLoading) {
    return <Skeleton w={{ base: 9, lg: '78px' }} h={ 8 } borderRadius="base"/>;
  }

  return (
    <Button
      ref={ ref }
      rightIcon={ appliedFiltersNum ? <Circle bg={ badgeBgColor } size={ 5 } color={ badgeColor }>{ appliedFiltersNum }</Circle> : undefined }
      size="sm"
      fontWeight="500"
      variant="outline"
      colorScheme="gray-dark"
      onClick={ onClick }
      isActive={ isActive }
      px={ 1.5 }
      flexShrink={ 0 }
      as={ as }
    >
      { FilterIcon }
      <Box display={{ base: 'none', lg: 'block' }}>Filter</Box>
    </Button>
  );
};

export default React.forwardRef(FilterButton);
