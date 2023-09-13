'use client';

import React, { useContext, useState } from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Checkbox,
  Button,
  Icon,
  Grid,
  HStack,
  Link,
  Image,
  Circle,
  Stack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import toast from 'react-hot-toast';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { RegisterModel } from '../model/RegisterModel';
import { BsCheckCircle } from 'react-icons/bs';
import SubmitButton from '../components/SubmitButton';
import PrimaryInput from '../components/PrimaryInput';
// import { Carousel } from 'react-responsive-carousel';
// // import Link from "next/link";

YupPassword(yup);

const validation = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().password().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const changeInputType = () => {
    setPasswordVisible(!passwordVisible);
  };
  const goBack = () => {
    window.history.back(); // This will navigate back to the previous page
  };
  const [terms, setTerms] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterModel>({
    resolver: yupResolver(validation),
    mode: 'all',
  });

  const onSubmitRegister = async (data: RegisterModel) => {
    if (!terms) {
      toast.error('You have not accepted the terms and conditions');
      return;
    }
    // console.log({ data });
    // try {
    //   const result = await UserService.create({ requestBody: data });
    //   console.log({ result });
    //   if (result.status) {
    //     toast.success(result.message as string);
    //     setSuccess(true);
    //     return;
    //   }
    //   toast.error(result.message as string);
    //   return;
    // } catch (error: any) {
    //   toast.error(error?.body?.message || error?.message);
    // }
  };
  const year = new Date().getFullYear();

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
          showIndicators={false}
          stopOnHover={false}
          interval={5000}
        >
          <Image src="/assets/007.jpg" alt="any" w="full" objectFit="cover" />
          <Image src="/assets/003.jpg" alt="any" w="full" objectFit="cover" />
          <Image src="/assets/004.jpg" alt="any" w="full" objectFit="cover" />
          <Image src="/assets/005.jpg" alt="any" w="full" objectFit="cover" />
          <Image src="/assets/001.jpg" alt="any" w="full" objectFit="cover" />
          <Image src="/assets/007.jpg" alt="any" w="full" objectFit="cover" />
        </Carousel> */}
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
                onClick={goBack}
                fontSize="28px"
                fontWeight={600}
                cursor="pointer"
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
              Embark on your journey!
            </Heading>

            <Text
              fontSize={['14px', '16px']}
              display="flex"
              textAlign="center"
              fontWeight="600"
            >
              Already have an account?
              <Text textColor="#1E64D5">
                <Link href="/login" color="brand.100">
                  &nbsp;Sign in here.
                </Link>{' '}
              </Text>
            </Text>
          </VStack>
          <Box
            w="100%"
            h={['100%', '100%', '100%']}
            // border="2px hidden green"
            overflow="auto"
            py="15px"
            pr="3px"
          >
            <form onSubmit={handleSubmit(onSubmitRegister)}>
              <PrimaryInput<RegisterModel>
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                name="email"
                error={errors.email}
                register={register}
              />
              <Grid
                templateColumns={['repeat(2,1fr)']}
                gap="1rem 1rem"
                py="10px"
              >
                <PrimaryInput<RegisterModel>
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  error={errors.firstName}
                  register={register}
                />

                <PrimaryInput<RegisterModel>
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  error={errors.lastName}
                  register={register}
                />
                <PrimaryInput<RegisterModel>
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
                <PrimaryInput<RegisterModel>
                  label="Re-enter password"
                  placeholder="Confirm your password"
                  type={passwordVisible ? 'text' : 'password'}
                  icon={true}
                  passwordVisible={passwordVisible}
                  changeVisibility={changeInputType}
                  name="confirmPassword"
                  error={errors.confirmPassword}
                  register={register}
                />
              </Grid>
              <Flex
                w="100%"
                alignItems="flex-end"
                justifyContent="flex-start"
                mb="1rem"
              >
                <Checkbox
                  alignItems="center"
                  borderColor="none"
                  borderRadius="5px"
                  size="md"
                  onChange={(e) => setTerms(e.target.checked)}
                >
                  I have read, undrestood and accept the{' '}
                  <span
                    style={{
                      color: '#1570FA',
                    }}
                  >
                    Terms and Conditions
                  </span>
                </Checkbox>
              </Flex>

              <SubmitButton textContent="sign up" isLoading={isSubmitting} />
            </form>

            <Text
              fontSize={['14px', '14px']}
              display={['block', 'block', 'block']}
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

export default Register;
