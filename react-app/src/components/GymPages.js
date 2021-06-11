import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../store/session"
import * as gymReducer from '../store/gyms'
import {
  Flex,
  Text,
  Button,
} from "@chakra-ui/react"

export default function GymPages() {
  const gym = useSelector(state => state.gyms);
  const dispatch = useDispatch()
  // console.log(gym, '------- this is the gyms')

  // useEffect(() => {
  //   dispatch(gymReducer.getOneGym())
  // }, [dispatch])

  return (
    <>
      <Text>This is the page for </Text>

    </>
  )
}
