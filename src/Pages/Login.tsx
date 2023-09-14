'use client';
import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Checkbox,
  HStack,
  Stack,
} from '@chakra-ui/react';

import * as yup from 'yup';
import YupPassword from 'yup-password';
import toast from 'react-hot-toast';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import PrimaryInput from '../components/PrimaryInput';
import SubmitButton from '../components/SubmitButton';
import { LoginModel } from '../model/LoginModel';
import { yupResolver } from '@hookform/resolvers/yup';

YupPassword(yup);

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().password().required(),
});
const year = new Date().getFullYear();

const goBack = () => {
  window.history.back(); // This will navigate back to the previous page
};

const Login = () => {
  const [terms, setTerms] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const changeInputType = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = async (data: LoginModel) => {
    const logged = {
      email: data.email,
      password: data.password,
    };
  };
  return (
    <Flex
      border="2px hidden red"
      w="100%"
      minH="100vh"
      justify={{ base: 'none', md: 'space-between' }}
      align="center"
      // bgColor="#e0edff"
    >
      <Box
        w="55%"
        h="100vh"
        overflow="hidden"
        display={{ base: 'none', lg: 'unset' }}
      >
        {/* <Carousel
        showStatus={false}
        autoPlay
        infiniteLoop
        animationHandler="fade"
        useKeyboardArrows
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        stopOnHover={false}
        interval={5000}
      >
        <Image src="/assets/007.jpg" alt="any" w="full" objectFit="cover" />
        <Image src="/assets/003.jpg" alt="any" w="full" objectFit="cover" />
        <Image src="/assets/004.jpg" alt="any" w="full" objectFit="cover" />
        <Image src="/assets/005.jpg" alt="any" w="full" objectFit="cover" />
        <Image src="/assets/001.jpg" alt="any" w="full" objectFit="cover" />
      </Carousel> */}
        <Image src="/assets/007.jpg" alt="any" w="full" objectFit="cover" />
      </Box>
      <Flex
        w={{ base: '100%', md: '80%', lg: '50%' }}
        pos="relative"
        h="100vh"
        align="center"
        mx="auto"
      >
        <Box
          w="full"
          bgColor="white"
          // borderRadius="30px"
          px="4rem"
          mt=".2rem"
          // py="1rem"
          // boxShadow="0px 20px 26px rgba(186, 182, 182, 0.16)"
        >
          <VStack spacing={0} gap="1.5rem" w="100%" mb="10px">
            <Flex
              _hover={{
                backgroundColor: 'transparent',
                border: '2px solid #1570FA',
              }}
              pos="absolute"
              w="2rem"
              h="2rem"
              borderRadius="50%"
              bgColor="gray.200"
              justify="center"
              left="10px"
              top="10px"
              // mr={{ base: 'unset', md: '20px' }}
              align="center"
            >
              <ChevronLeftIcon
                textColor="#08165e"
                fontSize="28px"
                fontWeight={600}
                cursor="pointer"
                onClick={goBack}
              />
            </Flex>
            <Stack>
              <Image
                // boxSize="50px"
                objectFit="cover"
                alt="logo"
                src="/assets/icon.png"
              />
            </Stack>
            <Heading
              fontWeight={700}
              fontSize="30px"
              // lineHeight={"44px"}
              color="black"
              textTransform="capitalize"
              textAlign="center"
              mx="auto"
              w="80%"
            >
              Glad to have you back!
            </Heading>

            <Text
              fontSize={['14px', '16px']}
              display="flex"
              textAlign="center"
              fontWeight="600"
            >
              Do not have an account?
              <Link href="/register">
                {/* <Link href="/register" textColor="#1E64D5"> */}
                &nbsp;Sign up here.
              </Link>
            </Text>
          </VStack>
          <Box
            w="100%"
            h="100%"
            // border="2px hidden green"
            overflow="auto"
            py="15px"
            pr="3px"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack gap=".5rem" w="full">
                <PrimaryInput<LoginModel>
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  error={errors.email}
                  register={register}
                />
                <PrimaryInput<LoginModel>
                  label="Password"
                  placeholder="Enter your password"
                  type={passwordVisible ? 'text' : 'password'}
                  icon={true}
                  passwordVisible={passwordVisible}
                  changeVisibility={changeInputType}
                  name="password"
                  error={errors.password}
                  register={register}
                />
              </VStack>
              <Flex
                w="100%"
                alignItems="flex-end"
                justifyContent="flex-start"
                my="1rem"
              >
                <Checkbox
                  alignItems="center"
                  borderColor="none"
                  borderRadius="5px"
                  size="md"
                  onChange={() => setTerms(!terms)}
                >
                  Remember me
                </Checkbox>
              </Flex>

              <SubmitButton
                textContent="sign in"
                isLoading={isSubmitting}
                isValid={isValid}
              />
            </form>

            <Box
              // my="5px"
              mt=".5rem"
              h="1px"
              textAlign="center"
              position="relative"
            >
              {' '}
              <Text pos="relative">or</Text>
            </Box>

            <Flex justifyContent="space-evenly" alignItems="center" my="3rem">
              {' '}
              <Box
                rounded="10px"
                w="5rem"
                m="5px"
                px="1.7rem"
                py="10px"
                bgColor="gray.200"
                _hover={{ bgColor: 'gray.400' }}
              >
                {' '}
                <Image alt="any" src="/assets/linked.png" />
              </Box>{' '}
              <Box
                rounded="10px"
                w="5rem"
                m="5px"
                px="1.7rem"
                py="10px"
                bgColor="gray.200"
                _hover={{ bgColor: 'gray.400' }}
              >
                {' '}
                <Image alt="any" src="/assets/google.png" />
              </Box>{' '}
              <Box
                rounded="10px"
                w="5rem"
                m="5px"
                px="1.7rem"
                py="10px"
                bgColor="gray.200"
                _hover={{ bgColor: 'gray.400' }}
              >
                {' '}
                <Image alt="any" src="/assets/facebook.png" />
              </Box>{' '}
            </Flex>
            <Text
              fontSize="14px"
              display="block"
              textAlign="center"
              mt="1rem"
              color="#3e3e3e"
              fontWeight="500"
            >
              &copy; Shield {year}. All Rights Reserved.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
