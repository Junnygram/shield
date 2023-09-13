import { Box, Grid, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const HomePage = () => {
  return (
    <Box>
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          {' '}
          <HStack h="20rem">
            <Text>Fully Managed Cloud nd Web hosting</Text>
          </HStack>
        </Box>
        <Box>
          <HStack>
            <Image alt="homepage" src="/assets/casual.png" />
          </HStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;
