import React from 'react';
import {
  Box,
  Flex,
  Link,
  Stack,
  Spacer,
  Heading,
  Container,
  SimpleGrid,
  ListHeader,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { ReactNode } from 'react';


export default function FooterDetails() {


  return (
    <Flex mw={'auto'}>
      <Spacer />
      <Box
        w={'100vw'}
        bg={useColorModeValue('#333333')}
        color={useColorModeValue('#ffffff')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={3} spacing={5}>
            <Stack align={'flex-start'}>
              <Heading fontSize={'xl'}>Company</Heading>
              <Link href={''}>About Us</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontSize={'xl'}>Support</Heading>
              <Link href={'#'}>Community Guidelines</Link>
              <Link href={'#'}>Contact Us</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontSize={'xl'}>Partners</Heading>
              <Link href={'#'}>Become a Partner</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        {/* <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
          </Stack>
        </SimpleGrid>
      </Container> */}
      </Box>
      <Spacer />
    </Flex>



  )
}



{/* <Box
bg={useColorModeValue('#333333')}
color={useColorModeValue('#ffffff')}
>
<Container as={Stack} maxW={'6xl'} py={10}>
  <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
    <Stack align={'flex-start'}>
      <ListHeader>Company</ListHeader>
      <Link href={'#'}>About Us</Link>
    </Stack>

    <Stack align={'flex-start'}>
      <ListHeader>Support</ListHeader>
      <Link href={'#'}>Community Guidelines</Link>
      <Link href={'#'}>Contact Us</Link>
    </Stack>

    <Stack align={'flex-start'}>
      <ListHeader>Partners</ListHeader>
      <Link href={'#'}>Become a Partner</Link>
    </Stack>
  </SimpleGrid>
</Container>
</Box> */}
