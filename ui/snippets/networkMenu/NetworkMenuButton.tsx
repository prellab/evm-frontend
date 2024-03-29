import { Icon, Button, forwardRef, chakra } from '@chakra-ui/react';
import React from 'react';

import networksIcon from 'icons/networks.svg';
import getDefaultTransitionProps from 'theme/utils/getDefaultTransitionProps';
import useExtendedColorMode from 'ui/pages/theme/useExtendedColorMode';

interface Props {
  isMobile?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const NetworkMenuButton = ({ isMobile, isActive, onClick, className }: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const defaultIconColor = useExtendedColorMode('gray.600', 'gray.400');
  const bgColorMobile = useExtendedColorMode('blue.50', 'gray.800');
  const iconColorMobile = useExtendedColorMode('blue.700', 'blue.50');

  return (
    <Button
      className={ className }
      variant="unstyled"
      display="inline-flex"
      alignSelf="stretch"
      alignItems="center"
      ref={ ref }
      h="36px"
      borderRadius="base"
      backgroundColor={ isActive ? bgColorMobile : 'none' }
      onClick={ onClick }
      aria-label="Network menu"
      aria-roledescription="menu"
    >
      <Icon
        as={ networksIcon }
        width="36px"
        height="36px"
        padding="10px"
        color={ isActive ? iconColorMobile : defaultIconColor }
        _hover={{ color: isMobile ? undefined : 'link_hovered' }}
        cursor="pointer"
        { ...getDefaultTransitionProps({ transitionProperty: 'margin' }) }
      />
    </Button>
  );
};

export default chakra(forwardRef(NetworkMenuButton));
