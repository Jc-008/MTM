import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
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
      <Grid templateColumns="repeat(11, 1fr)" gap={.7} bg="#FFFFF">
        <Flex >
          <Link href='/' w="100%" h="55px" textAlign="center" paddingTop={4} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >MTM</Link>
        </Flex>
        <Flex w="100%" h="55px" />
        {/* <SearchBar/> */}
        <Flex w="100%" h="55px" />
        <Flex w="100%" h="55px" />
        <Flex w="100%" h="55px" />
        <Flex w="100%" h="55px" />
        <Flex w="100%" h="55px" />
        <Flex w="100%" h="55px" />
        <Link href='' w="100%" h="55px" textAlign="center" paddingTop={4} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >How it works</Link>
        <Link href='' w="100%" h="55px" textAlign="center" paddingTop={4} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >Locations</Link>
        {/* <Button href='' w="100%" h="25px" textAlign="center" paddingTop={4} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >Try MTM</Button> */}
        <Flex alignItems='center' justifyContent='center'>
          <Button href='' w='100px' bg='#0055FF' color='white' _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >Try MTM</Button>
        </Flex>
      </Grid >
    </>
  );
}

export default NavBar;



{/* <nav>
  <ul>
    <li>
      <NavLink to="/" exact={true} activeClassName="active">
        Home
          </NavLink>
    </li>
    <li>
      <NavLink to="/login" exact={true} activeClassName="active">
        Login
          </NavLink>
    </li>
    <li>
      <NavLink to="/sign-up" exact={true} activeClassName="active">
        Sign Up
          </NavLink>
    </li>
    <li>
      <NavLink to="/users" exact={true} activeClassName="active">
        Users
          </NavLink>
    </li>
    <li>
      <LogoutButton />
    </li>
  </ul>
</nav> */}
