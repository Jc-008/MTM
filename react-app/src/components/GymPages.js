import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import * as sessionActions from "../store/session"
import * as gymReducer from '../store/gyms'
import { getOneGym } from '../store/gyms'
// import gyms from '../store/gyms'
import {
  Flex,
  Text,
  Button,
} from "@chakra-ui/react"

export default function GymPages() {
  const gym = useSelector(state => state.gym.gym);
  const dispatch = useDispatch()
  const { id } = useParams()
  // const []


  console.log(gym, '------- this is the gyms')
  console.log(gym?.name, '------- this is the gyms name')

  useEffect(() => {
    dispatch(getOneGym(id))
  }, [dispatch])

  return (
    <>
      <Flex
        h={'97vh'}
        bg={'lightblue'}
        align={"center"}
        justify={"center"}
      >
        <Text>This is the page for {gym?.name}</Text>

      </Flex>

    </>
  )
}
