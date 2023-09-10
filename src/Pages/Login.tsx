// 'use client';
// import React, { useEffect, useState } from 'react';
// import { ChevronLeftIcon } from '@chakra-ui/icons';
// import {
//   Box,
//   Flex,
//   Heading,
//   Image,
//   Text,
//   VStack,
//   Checkbox,
//   HStack,
//   Stack,
// } from '@chakra-ui/react';

// import * as yup from 'yup';
// import YupPassword from 'yup-password';
// import toast from 'react-hot-toast';
// import Link from 'next/link';
// import Cookies from 'js-cookie';

// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import PrimaryInput from '../components/PrimaryInput';
// import SubmitButton from '../components/SubmitButton';
// import { LoginModel } from '../model/LoginModel';

// YupPassword(yup);

// const schema = yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().password(),
// });

// const Login = () => {
//   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
//   const changeInputType = () => {
//     setPasswordVisible(!passwordVisible);
//   };
//   const [terms, setTerms] = useState<boolean>(false);
//   const [loggedIn, setLoggedIn] = useState<any>({});
//   useEffect(() => {
//     if (Cookies.get('hash') !== undefined) {
//       setLoggedIn(JSON.parse(Cookies.get('hash') as string));
//     }
//   }, []);
//   console.log({ loggedIn });
//   const {
//     handleSubmit,
//     register,
//     formState: { errors, isSubmitting },
//   } = useForm<LoginModel>({
//     // resolver: yupResolver(schema),
//     mode: 'all',
//   });

//   const onSubmit = async (data: LoginModel) => {
//     const logged = {
//       email: data.email,
//       password: data.password,
//     };
//     try {
//       // const result = await loginUser({ requestBody: data });
//       // if (result.status) {
//       //   toast.success('Login Successful!');
//       //   Cookies.set('user', JSON.stringify(result.data));
//       //   if (terms) {
//       //     Cookies.set('hash', JSON.stringify(logged), {
//       //       expires: 10,
//       //     });
//       //   }
//       //   window.location.href = '/profile';
//       //   return;
//       // }
//       // toast.error(result.message as string);
//     //   return;
//     // } catch (err: any) {
//     //   toast.error(err.message || err.body.message);
//     // }
//   };

//   return (
//     <Box>
//       <Flex justify="ceneter" align="center">
//         <Box
//           h="100vh"
//           w="50%"
//           display={{ base: 'none', md: 'flex' }}
//           alignContent="center"
//           justifyContent="center"
//           my="auto"
//         >
//           a
//         </Box>
//         <Box h="100%" w="full">
//           <VStack spacing={3} w="100%" mt="20px">
//             <Flex
//               _hover={{
//                 backgroundColor: 'transparent',
//                 border: '2px solid #1570FA',
//               }}
//               pos="absolute"
//               w="2rem"
//               h="2rem"
//               borderRadius="50%"
//               bgColor="gray.200"
//               justify="center"
//               left="10px"
//               top="10px"
//               // mr={{ base: 'unset', md: '20px' }}
//               align="center"
//             >
//               <ChevronLeftIcon
//                 textColor="#08165e"
//                 onClick={() => console.log(5)}
//                 fontSize="28px"
//                 fontWeight={600}
//                 cursor="pointer"
//               />
//             </Flex>
//             <Stack textColor="white">
//               <Image
//                 // boxSize="50px"
//                 objectFit="cover"
//                 alt="logo"
//                 src="/assets/icon.png"
//               />
//             </Stack>
//             <Heading fontWeight={600} fontSize="32px" lineHeight={1.5}>
//               Sign In
//             </Heading>

//             <Text color="#54595E" lineHeight={1.5}>
//               Glad to have you back!.
//             </Text>
//           </VStack>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default Login;

import React from 'react';

const Login = () => {
  return <div>Login Page</div>;
};

export default Login;
