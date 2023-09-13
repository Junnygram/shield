import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Square,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import React, { useContext } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { MdMiscellaneousServices } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { FaBook, FaHome } from 'react-icons/fa';
import { BiMessageDots } from 'react-icons/bi';
import { BsPersonFill, BsWalletFill } from 'react-icons/bs';
import { RiRemoteControlFill } from 'react-icons/ri';
import MenuItems from './MenuItems';

type Side = {
  setShowSide: any;
  showSide: boolean;
};
function Sidebar({ setShowSide, showSide }: Side) {
  // const { logout } = useContext(UserContext);
  const closeSide = () => {
    setShowSide((prev: any) => !prev);
  };

  const navlinks = [
    // { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Login', href: 'login' },
  ];

  return (
    <Box>
      <VStack
        bgColor="#FFFFFF"
        h="100vh"
        w={{
          base: showSide ? '40%' : '0',
        }}
        right={showSide ? '0%' : '-20%'}
        pos="fixed"
        px={{ base: showSide ? '2rem' : '0', md: 'none' }}
        pt="2rem"
        zIndex="1"
        align="flex-start"
        boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        transition="all .2s ease-in"
      >
        <VStack align="flex-start" justify="space-between" minH="75vh" w="100%">
          <Flex
            flexDir="column"
            align="start"
            gap="1.5rem"
            mt="2rem"
            // mr={{ base: '-2rem' }}
            w="80%"
            mx="auto"
            justify="center"
          >
            <>
              {navlinks.map((x, i) => (
                <Box key={i}>
                  <MenuItems
                    name={x.label}
                    url={x.href}
                    icon={<RxDashboard cursor="default" />}
                    // close={closeSide}
                  />
                </Box>
              ))}
            </>
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Sidebar;

{
  /* <Flex
          justify="end"
          mb="1rem"
          w="80%"
          display={{ base: 'flex', lg: 'none' }}
        >
          {' '}
          <CloseIcon
            my="auto"
            onClick={() => setShowSide((prev: any) => !prev)}
          />
        </Flex> */
}
