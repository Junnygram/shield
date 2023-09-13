import Image from 'next/image';
import styles from './page.module.css';
import { Box } from '@chakra-ui/react';
import HomePage from '@/src/Pages/HomePage';

export default function Home() {
  return (
    <Box>
      <HomePage />
    </Box>
  );
}
