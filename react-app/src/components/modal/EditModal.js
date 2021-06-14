import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import * as sessionActions from "../../store/session"

import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react";


function EditModal() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState(sessionUser.email);
  const [fname, setfname] = useState(sessionUser.first_name);
  const [lname, setlname] = useState(sessionUser.last_name);
  const [zipcode, setZipcode] = useState(sessionUser.zipcode);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // if (sessionUser) {
  //   // console.log('Usersession if block !!!!!!----------')
  //   return <Redirect to="/membership" />;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    const dispatched = await dispatch(sessionActions.editUserDetails({ first_name: fname, last_name: lname, zipcode, email, password }))
    // .catch(async (res) => {
    //   const data = await res.json();
    //   if (data && data.errors) setErrors(data.errors);
    if (dispatched.errors) setErrors(dispatch.errors)
    // else useOutsideClick()
    // } else setErrors(['Confirm Password field must be the same as the Password field']);
  }




  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {errors?.map((error, idx) => <span key={idx}>{error}</span>)}
        </div>
        <Stack spacing={3}>
          <FormControl mb={'15px'} isRequired>
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
            <FormLabel>Zipcode</FormLabel>
            <InputGroup>
              <Input
                placeholder="Zipcode"
                type='text'
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </InputGroup>
            <FormLabel> New Password</FormLabel>
            <InputGroup>
              <Input
                placeholder=" New Password"
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isRequired={false}
              />
            </InputGroup>
            <br />
            <Flex
              align={"center"}
              justify={"center"}
            >
              <Button type="Submit" bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}>Submit</Button>
            </Flex>
          </FormControl>
        </Stack>
      </form>
    </>
  );
}

export default EditModal
