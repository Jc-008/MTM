import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { login } from "../../store/session";
import * as sessionActions from "../../store/session"
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

export function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const dispatched = await dispatch(sessionActions.login(email, password))

    if (dispatched.errors) setErrors(dispatch.errors)
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    const email = 'demo@aa.io';
    const password = 'password'
    const dispatched = await dispatch(sessionActions.login(email, password))

    if (dispatched.errors) setErrors(dispatch.errors)
  }

  return (
    <>
      <Box
        w={'450px'}
        rounded={'lg'}
        // bg={useColorModeValue('white', 'gray.700')}
        // boxShadow={'lg'}
        boxShadow={'0 4px 12px rgb(0 0 0 / 10%)'}
        p={8}

      >
        <form onSubmit={handleSubmit}>
          <div>
            {errors.map((error, idx) => <span key={idx}>{error}</span>)}
          </div>
          <Stack spacing={3}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <Input
                  // ref={initialRef}
                  placeholder="Email"
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  // ref={initialRef}
                  placeholder="Password"
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              <br />
              <Flex
                align={"center"}
                justify={"center"}
              >
                <Button type='Submit' bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}>Log in</Button>
              </Flex>
            </FormControl>
          </Stack>
        </form>

        <form onSubmit={handleDemo}>
          <br />
          <Flex
            align={"center"}
            justify={"center"}
          >
            <Button type="Submit" bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}>Demo User</Button>
          </Flex>
        </form>
        <br />
        <Flex
          align={"center"}
          justify={"flex-end"}
        >
          <Text fontSize={'15px'} color={'gray.600'}>
            Business Owners, log in <Link href="/business-owner-login" color={'#0055FF'}>here</Link>
          </Text>
        </Flex>

      </Box>

    </>
  );
};

export default LoginForm;
