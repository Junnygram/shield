import { Box, Flex, Stack, VStack, Image, IconButton } from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import React, { useState } from 'react';
import { MenuItems } from './MenuItems';

type SideProps = {
  showSide: boolean;
  setShowSide: any;
};

const Header = ({ showSide, setShowSide }: SideProps) => {
  const closeSide = () => {
    setShowSide((prev: any) => !prev);
  };
  const [head, setHead] = useState('headingg');
  console.log({ head });
  const navlinks = [
    // { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Login', href: 'login' },
  ];
  return (
    <Box bgColor="gray.400">
      <Stack p={'10px'}>
        <Flex
          justify={'space-between'}
          align={'center'}
          px={'10px'}
          h={'3rem'}
          // bgColor={'#03045E'}
          textColor={'#03045E'}
        >
          <Stack textColor="white">
            <Image
              // boxSize="50px"
              objectFit="cover"
              alt="logo"
              src="/assets/icon.png"
            />
          </Stack>
          <Flex>
            <Box display={{ base: 'relative', md: 'none' }}>
              <IconButton
                size={'md'}
                icon={showSide ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                // onClick={showSide ? closeSide : o}
                onClick={() => setShowSide((prev: any) => !prev)}
              />
            </Box>

            <Flex
              mr="2rem"
              gap="2rem"
              textColor={'#03045E'}
              display={{ base: 'none', md: 'flex' }}
              justify={'space-between'}
            >
              <>
                {navlinks.map((x, i) => (
                  <Box key={i}>
                    <MenuItems name={x.label} url={x.href} />
                  </Box>
                ))}
              </>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Header;
