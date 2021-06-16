import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import LogoutButton from './auth/LogoutButton';
import SearchBarDetails from '../components/SearchBarDetails'
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
import { getAllGyms } from '../store/gyms';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  let logoTxt;

  if (sessionUser) {          // if user is logged in
    logoTxt = (
      <Link href='/search' fontSize={'23px'} textAlign="center" fontWeight="Bold" style={{ textDecoration: 'none' }}>MTM</Link>
      // <Link href='' textAlign="center" fontWeight="500" style={{ textDecoration: 'none' }}>{{User.available_credit}}Credits</Link>
    )
  } else {                      // if user is NOT LOGGED in
    logoTxt = (
      <Link href='/' fontSize={'23px'} textAlign="center" fontWeight="Bold" style={{ textDecoration: 'none' }}>MTM</Link>
    )
  }



  let searchbarVisibilityLeft
  if (sessionUser) {
    searchbarVisibilityLeft = (
      <SearchBarDetails />
    )
  }

  let searchbarVisibilityRight
  if (sessionUser) {
    searchbarVisibilityRight = (
      <SearchBarFormPt2 />
    )
  }


  let RightLeftNavBar;

  if (sessionUser) {          // if user is logged in
    RightLeftNavBar = (
      <Link href='' textAlign="center" fontWeight="500" style={{ textDecoration: 'none' }}>{sessionUser.available_credit} Credits</Link>
      // <Link href='' textAlign="center" fontWeight="500" style={{ textDecoration: 'none' }}>{{User.available_credit}}Credits</Link>
    )
  } else {                      // if user is NOT LOGGED in
    RightLeftNavBar = (
      <Link href='' textAlign="center" fontWeight="500" style={{ textDecoration: 'none' }} >How it works</Link>
    )
  }


  let RightMiddleNavBar;

  if (sessionUser) {
    RightMiddleNavBar = (
      <Button rounded='25px' colorScheme="white" variant="ghost">
        <a href='/membership'><i className="fa fa-user"></i></a>
      </Button >
    )
  } else {
    RightMiddleNavBar = (
      <Link href='' textAlign="center" fontWeight="500" style={{ textDecoration: 'none' }}>Locations</Link>
    )
  }


  let RightFarRightNavBar;

  if (sessionUser) {          // if user is logged in
    RightFarRightNavBar = (
      <LogoutButton user={sessionUser} />

    )
  } else {                      // if user is NOT LOGGED in
    RightFarRightNavBar = (
      <Button w='100px' bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}><a href="/sign-up">Try MTM</a></Button>
    )
  }

  useEffect(() => {
    // dispatch(gymReducer.getAllGyms())
    dispatch(getAllGyms())                // when all the gyms populate the  allgyms = {}
  }, [dispatch])

  return (
    <>
      <Grid templateColumns="repeat(10, 1fr)" gap={.7} bg="#FFFFF" minHeight={'64px'} >
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" _hover={{ fontWeight: "bold", bg: "#f7f7f7" }}>
          {logoTxt}
          {/* <Link href='/' fontSize={'23px'} textAlign="center" fontWeight="Bold" style={{ textDecoration: 'none' }}>MTM</Link> */}
        </Flex>
        {/* <Flex w="100%" h="55px" /> */}
        <Flex w="100%" h="55px" mt={'-8px'}>
          {searchbarVisibilityLeft}
          {/* <SearchBarDetails /> */}
        </Flex>
        <Flex w="100%" h="55px" mt={'-8px'} >
          {/* {searchbarVisibilityRight} */}
          {/* <SearchBarFormPt2 /> */}
        </Flex>
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" />
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" />
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" />
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" />
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" _hover={{ fontWeight: "bold", bg: "#f7f7f7" }}>
          {RightLeftNavBar}
          {/* <Link href='' textAlign="center" fontWeight="500" style={{ textDecoration: 'none' }} >How it works</Link> */}
        </Flex>
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px" _hover={{ fontWeight: "bold", bg: "#f7f7f7" }}>
          {RightMiddleNavBar}
          {/* <Link href='' textAlign="center" fontWeight="500" style={{ textDecoration: 'none' }}>Locations</Link> */}

        </Flex>
        {/* <Button href='' w="100%" h="25px" textAlign="center" paddingTop={4} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.100" }} >Try MTM</Button> */}
        <Flex alignItems='center' justifyContent='center' w="100%" h="64px">
          {RightFarRightNavBar}
          {/* <Button w='100px' bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}><a href="/sign-up">Try MTM</a></Button> */}

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
    <SearchBarDetails />
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
