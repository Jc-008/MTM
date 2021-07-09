import React from 'react';
import {
  Box,
  Grid,
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
    <Grid templateColumns="repeat(3, 1fr)" gap={.7} bg='White'>
      <Box
        w={'100vw'}
        bottom='0'
        position='relative'
        bg={useColorModeValue('#3f3f3f')}
        color={useColorModeValue('#ffffff')}
      >
        <Container as={Stack} py={10}>
          <SimpleGrid columns={3} spacing={3}>
            <Stack align={'flex-start'}>
              <Heading fontSize={'xl'}>Company</Heading>
              <Link href={''}>About Us</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontSize={'xl'}>Support</Heading>
              {/* <Link href={'#'}>Community Guidelines</Link> */}
              <Link href={'#'}>Contact Us</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading fontSize={'xl'}>Partners</Heading>
              <Link href={'#'}>Become a Partner</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Grid>



  )
}



// <Flex>
//       <Spacer />
//       <Box
//         w={'100vw'}
//         bg={useColorModeValue('#333333')}
//         color={useColorModeValue('#ffffff')}>
//         <Container as={Stack} maxW={'6xl'} py={10}>
//           <SimpleGrid columns={3} spacing={5}>
//             <Stack align={'flex-start'}>
//               <Heading fontSize={'xl'}>Company</Heading>
//               <Link href={''}>About Us</Link>
//             </Stack>
//             <Stack align={'flex-start'}>
//               <Heading fontSize={'xl'}>Support</Heading>
//               <Link href={'#'}>Community Guidelines</Link>
//               <Link href={'#'}>Contact Us</Link>
//             </Stack>
//             <Stack align={'flex-start'}>
//               <Heading fontSize={'xl'}>Partners</Heading>
//               <Link href={'#'}>Become a Partner</Link>
//             </Stack>
//           </SimpleGrid>
//         </Container>
//       </Box>
//       <Spacer />
//     </Flex>
