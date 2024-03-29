import { Box, Button, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import type { UserInfo } from 'types/api/account';

import config from 'configs/app';
import useNavItems from 'lib/hooks/useNavItems';
import getDefaultTransitionProps from 'theme/utils/getDefaultTransitionProps';
import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';
import NavLink from 'ui/snippets/navigation/NavLink';

const feature = config.features.account;

type Props = {
  data?: UserInfo;
};

const ProfileMenuContent = ({ data }: Props) => {
  const { accountNavItems, profileItem } = useNavItems();
  const primaryTextColor = useExtendedColorMode('blackAlpha.800', 'whiteAlpha.800');

  if (!feature.isEnabled) {
    return null;
  }

  return (
    <Box>
      { (data?.name || data?.nickname) && (
        <Text
          fontSize="sm"
          fontWeight={ 500 }
          color={ primaryTextColor }
          { ...getDefaultTransitionProps() }
        >
        Signed in as { data.name || data.nickname }
        </Text>
      ) }
      { data?.email && (
        <Text
          fontSize="sm"
          mb={ 1 }
          fontWeight={ 500 }
          color="gray.500"
          { ...getDefaultTransitionProps() }
        >
          { data.email }
        </Text>
      ) }
      <NavLink item={ profileItem } isActive={ undefined } px="0px" isCollapsed={ false }/>
      <Box as="nav" mt={ 2 } pt={ 2 } borderTopColor="divider" borderTopWidth="1px" { ...getDefaultTransitionProps() }>
        <VStack as="ul" spacing="0" alignItems="flex-start" overflow="hidden">
          { accountNavItems.map((item) => <NavLink key={ item.text } item={ item } isActive={ undefined } isCollapsed={ false } px="0px"/>) }
        </VStack>
      </Box>
      <Box mt={ 2 } pt={ 3 } borderTopColor="divider" borderTopWidth="1px" { ...getDefaultTransitionProps() }>
        <Button size="sm" width="full" variant="outline" as="a" href={ feature.logoutUrl }>Sign Out</Button>
      </Box>
    </Box>
  );
};

export default ProfileMenuContent;
