import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { login } from "../../store/session";
import * as sessionActions from "../store/session"
import {
  Box,
  Flex,
  Link,
  Text,
  Input,
  Stack,
  Button,
  FormLabel,
  InputGroup,
  FormControl,
  useColorModeValue,
} from "@chakra-ui/react";

export default function BusinessOwnerLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handle_Business_Submit = async (e) => {           // Only changed names for this
    e.preventDefault();
    setErrors([]);
    const dispatched = await dispatch(sessionActions.login(email, password))

    if (dispatched.errors) setErrors(dispatch.errors)
  };

  const handle_Business_Demo = async (e) => {           // Only changed names for this
    e.preventDefault();
    const email = 'demo@aa.io';
    const password = 'password'
    const dispatched = await dispatch(sessionActions.login(email, password))

    if (dispatched.errors) setErrors(dispatch.errors)
  }

  return (
    <>
      <Flex
        align={"center"}
        justify={"center"}
        h={'82vh'}
        // mb={'100px'}
        bg={'#f7f7f7'}
      >
        <Box
          w={'450px'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'0 4px 12px rgb(0 0 0 / 24%)'}
          p={8}
          mt={'100px'}
          h={'450px'}
        >
          <Text
            align={"center"}
            justify={"center"}
            fontSize={'25px'}
            fontWeight={'600'}
            mb={'25px'}
          >
            Welcome Back
          </Text>
          <form onSubmit={handle_Business_Submit}>
            <div>
              {errors.map((error, idx) => <span key={idx}>{error}</span>)}
            </div>
            <Stack spacing={3}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Email"
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
                <br />
                <br />
                <Flex
                  align={"center"}
                  justify={"center"}
                  mb={'15px'}
                >
                  <Button type='Submit' bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}>Log in</Button>
                </Flex>
              </FormControl>
            </Stack>
          </form>

          <form onSubmit={handle_Business_Demo}>
            {/* <br /> */}
            <Flex
              align={"center"}
              justify={"center"}
            >
              <Button type="Submit" bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}>Demo Biz Owner</Button>
            </Flex>
          </form>
        </Box>
      </Flex>


    </>
  )

}
