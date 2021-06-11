import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import * as sessionActions from "../store/session"
// import * as gymReducer from '../store/gyms'
import { getOneGym } from '../store/gyms'
import {
  Flex,
  Text,
  Button,
} from "@chakra-ui/react"

export default function GymPages() {
  const gym = useSelector(state => state.gym);
  const dispatch = useDispatch()
  const { id } = useParams()


  console.log(gym, '------- this is the gyms')

  useEffect(() => {
    dispatch(getOneGym(id))
  }, [dispatch])

  return (
    <>
      <Text>This is the page for</Text>

    </>
  )
}
