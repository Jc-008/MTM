import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { login } from "../../store/session";
import * as sessionActions from "../store/session"
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

export default function BusinessOwnerLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();


  const handle_Business_Submit = async (e) => {           // Only changed names for this
    e.preventDefault();
    setErrors([]);
    const dispatched = await dispatch(sessionActions.login(email, password))

    if (dispatched.errors) {
      setErrors(dispatch.errors)
    }
    else {
      history.push('/membership')           // want to push to user's homepage after logging in. '/search'
    }
  };


  const handle_Business_Demo = async (e) => {           // Only changed names for this
    e.preventDefault();
    const email = 'hulk@gmail.com';
    const password = 'hulkSmash'
    const dispatched = await dispatch(sessionActions.login(email, password))


    if (dispatched.errors) {
      setErrors(dispatch.errors)
    } else {
      history.push('/membership')
    }
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
          // rounded={'xl'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'0 4px 12px rgb(0 0 0 / 24%)'}
          p={8}
          // mt={'100px'}
          h={'500px'}
        >
          <Text
            align={"center"}
            justify={"center"}
            fontSize={'25px'}
            fontWeight={'600'}
            mt={'15px'}
            mb={'25px'}
          >
            Welcome Back
          </Text>
          <form onSubmit={handle_Business_Submit}>
            <div>
              {errors?.map((error, idx) => <span key={idx}>{error}</span>)}
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
                    mb={'15px'}
                  />
                </InputGroup>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    mb={'10px'}
                  />
                </InputGroup>
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

        <Box
          p={20}
        >
          <Flex
            align={"center"}
            justify={"center"}
            direction={'column'}
          >
            <Image
              name={'image-next-to-login'}
              h={'200px'}
              src="https://sialdeporte.com/wp-content/uploads/2018/03/kickboxing1.jpg"
              mb={'25px'}
            >
            </Image>
            <Text
              align={"center"}
              justify={"center"}
              fontWeight={'600'}
              fontSize={'30px'}
            >
              Not a member yet?
            </Text>
            <Text
              align={"center"}
              justify={"center"}
              fontSize={'25px'}
              mb={'8px'}
            >
              Join now
            </Text>
            <Button
              type='Submit'
              bg="'#f7f7f7'"
              // border="1px"
              variant={"outline"}
              borderColor="#d6d6d6"
            >
              Try for free
            </Button>
          </Flex>
        </Box>

      </Flex>
    </>
  )

}
