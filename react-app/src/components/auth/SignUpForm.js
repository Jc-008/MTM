import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import * as sessionActions from "../../store/session"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  isRequired,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) {
    // console.log('Usersession if block !!!!!!----------')
    return <Redirect to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      const dispatched = await dispatch(sessionActions.signUp({ fname, lname, email, password }))
      // .catch(async (res) => {
      //   const data = await res.json();
      //   if (data && data.errors) setErrors(data.errors);
      if (dispatched.errors) setErrors(dispatch.errors)
      // else useOutsideClick()
    } else setErrors(['Confirm Password field must be the same as the Password field']);
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
              <FormLabel>First name</FormLabel>
              <InputGroup>
                <Input
                  placeholder="First name"
                  type='text'
                  value={fname}
                  onChange={(e) => setfname(e.target.value)}
                />
              </InputGroup>
              <FormLabel>Last name</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Last name"
                  type='text'
                  value={lname}
                  onChange={(e) => setlname(e.target.value)}
                />
              </InputGroup>
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
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  // ref={initialRef}
                  placeholder="Confirm Password"
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </InputGroup>
              <br />
              <Button type='Submit'>Sign Up</Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default SignUpForm;
