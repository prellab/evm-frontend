import type { SystemStyleObject } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react';

import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

const COUNTER_OVERLOAD = 50;

type Props = {
  count?: number;
  parentClassName: string;
}

const TasCounter = ({ count, parentClassName }: Props) => {

  const zeroCountColor = useExtendedColorMode('blackAlpha.400', 'whiteAlpha.400');

  if (count === undefined) {
    return null;
  }

  const sx: SystemStyleObject = {
    [`.${ parentClassName }:hover &`]: { color: 'inherit' },
  };

  return (
    <Text
      color={ count > 0 ? 'text_secondary' : zeroCountColor }
      ml={ 1 }
      sx={ sx }
      transitionProperty="color"
      transitionDuration="normal"
      transitionTimingFunction="ease"
    >
      { count > COUNTER_OVERLOAD ? `${ COUNTER_OVERLOAD }+` : count }
    </Text>
  );
};

export default TasCounter;
