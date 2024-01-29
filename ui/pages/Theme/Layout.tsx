/* eslint-disable react/jsx-no-bind */
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';

import PageTitle from 'ui/shared/Page/PageTitle';

import useExtendedColorMode from './useExtendedColorMode';

const Layout = () => {
  const colors = [
    {
      color: '#FFFFFF',
      text: 'light',
    },
    {
      color: '#000000',
      text: 'dark',
    },
    {
      color: '#FF0000',
      text: 'red',
    },
  ];
  const { setColorMode } = useColorMode();
  return (
    <>
      <PageTitle title="Layout Color" withTextAd/>
      <Flex bgColor={ useExtendedColorMode() }>
        { colors.map((color, i) => (
          <Box
            bgColor={ color.color }
            width="240px"
            height="100px"
            borderRadius="16px"
            mr="24px"
            cursor="pointer"
            boxShadow="0px 2px 4px #000000"
            key={ i }
            onClick={ () => setColorMode(color.text) }
          />
        )) }
      </Flex>
    </>
  );
};

export default Layout;
