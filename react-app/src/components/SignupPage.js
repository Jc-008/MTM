import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { login } from "../../store/session";
import * as sessionActions from "../store/session"
import SignUpForm from "./auth/SignUpForm";
import {
  Box,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";


export default function SignUpPage() {


  return (
    <>
      <Flex
        // align={"center"}
        justify={"center"}
        h={'100vh'}
        bg={'#f7f7f7'}
      >
        <Box
          w={'800px'}
        // bg='green'
        >
          <Flex
            align={"center"}
            justify={"center"}
            direction={'column'}
            w={'800px'}
            mr={'750px'}

            mt={'275px'}
          // bg={'purple'}
          >
            <Image
              name={'image-next-to-signUp'}
              src="https://cdn.evolve-mma.com/wp-content/uploads/2019/11/muay-thai-workout.jpg"
              mb={'25px'}
              w={'600px'}
            >
            </Image>
            <Text
              align={"center"}
              justify={"center"}
              fontWeight={'600'}
              fontSize={'30px'}
              mb={'15px'}
            >
              Start your free trial today
            </Text>

            <Text
              align={"center"}
              justify={"center"}
              fontWeight={'400'}
              fontSize={'20px'}
            >
              Try classes from the top-rated gyms with your free trial
          </Text>
          </Flex>
        </Box>


        <Box
          w={'700px'}
          mt={'200px'}
        >
          {/* <Text>This is where the login form will be</Text> */}
          <SignUpForm />
        </Box>
      </Flex>

    </>
  )
}
