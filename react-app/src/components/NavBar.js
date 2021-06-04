import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SearchBarForm from '../components/SearchbarForm'
import SearchBarFormPt2 from '../components/SearchbarFormPt2'
import {
  Wrap,
  WrapItem,
  Divider,
  Box,
  Image,
  Container,
  Center,
  Link,
  LinkBox,
  LinkOverlay,
  Heading,
  Flex,
  Grid,
  Button,
  colorScheme,

} from "@chakra-ui/react"


const NavBar = () => {
  return (
    <>
      <Grid templateColumns="repeat(10, 1fr)" gap={.7} bg="#FFFFF" minHeight={'64px'} >
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" _hover={{ fontWeight: "bold", bg: "#f7f7f7" }}>
          <Link href='/' fontSize={'23px'} textAlign="center" fontWeight="Bold" style={{ textDecoration: 'none' }}>MTM</Link>
        </Flex>
        {/* <Flex w="100%" h="55px" /> */}
        <Flex w="100%" h="55px" mt={'-8px'}>
          <SearchBarForm />
        </Flex>
        <Flex w="100%" h="55px" mt={'-8px'} >
          <SearchBarFormPt2 />
        </Flex>
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" />
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" />
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" />
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" />
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" _hover={{ fontWeight: "bold", bg: "#f7f7f7" }}>
          <Link href='' textAlign="center" fontWeight="500" style={{ textDecoration: 'none' }} >How it works</Link>
          {/* <Link href='' textAlign="center" fontWeight="500" _hover={{ fontWeight: "bold", bg: "#dedede" }} >How it works</Link> */}
        </Flex>
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" _hover={{ fontWeight: "bold", bg: "#f7f7f7" }}>
          <Link href='' textAlign="center" fontWeight="500" style={{ textDecoration: 'none' }}>Locations</Link>
        </Flex>
        {/* <Button href='' w="100%" h="25px" textAlign="center" paddingTop={4} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >Try MTM</Button> */}
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px">
          <Button href='' w='100px' bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}>Try MTM</Button>
        </Flex>
      </Grid >
    </>
  );
}

export default NavBar;



/* <>
  <Grid templateColumns="repeat(11, 1fr)" gap={.7} bg="#FFFFF" minHeight={'64px'} >
    <Flex >
      <Link href='/' w="100%" h="55px" textAlign="center" paddingTop={5} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >MTM</Link>
    </Flex>
    <Flex w="100%" h="55px" />
    <SearchBarForm />
    <Flex w="100%" h="55px" />
    <Flex w="100%" h="55px" />
    <Flex w="100%" h="55px" />
    <Flex w="100%" h="55px" />
    <Link href='' w="100%" h="55px" textAlign="center" paddingTop={4} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >How it works</Link>
    <Link href='' w="100%" h="55px" textAlign="center" paddingTop={4} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >Locations</Link> */
// {/* <Button href='' w="100%" h="25px" textAlign="center" paddingTop={4} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >Try MTM</Button> */ }
//     <Flex alignItems='center' justifyContent='center'>
//       <Button href='' w='100px' bg='#0055FF' color='white' _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >Try MTM</Button>
//     </Flex>
//   </Grid >
// </>
