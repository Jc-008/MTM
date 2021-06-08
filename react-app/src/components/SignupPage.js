import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { login } from "../../store/session";
import * as sessionActions from "../store/session"
import SignUpForm from "./auth/SignUpForm";
import {
  Box,
  Flex,
  Link,
  Text,
  Image,
  Input,
  Stack,
  Button,
  FormLabel,
  InputGroup,
  FormControl,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";


export default function SignUpPage() {


  return (
    <>
      <Flex
        align={"center"}
        justify={"center"}
        mb={'50px'}
        h={'82vh'}
      >
        <Box p={20}>
          <Text> This is the left side of the page</Text>
        </Box>
        <Box>
          {/* <Text>This is where the login form will be</Text> */}
          <SignUpForm />
        </Box>
      </Flex>

    </>
  )
}
