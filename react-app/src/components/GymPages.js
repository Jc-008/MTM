import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import * as gymReducer from '../store/gyms'
// import { getOneGym } from '../store/gyms'
import { getAGym } from '../store/gyms'
// import gyms from '../store/gyms'
import {
  Flex,
  Text,
  Button,
} from "@chakra-ui/react"

export default function GymPages() {
  const gym = useSelector(state => state.gym.singleGym);
  const gymsLoaded = useSelector(state => state.gym.loaded)
  const dispatch = useDispatch()
  const { id } = useParams()
  // const []


  // console.log(gyms, '------- this is the gyms')
  // console.log(id, '------- id of current page and want gym')
  // console.log(gym?.name, '------- this is the gyms name')

  useEffect(() => {
    // dispatch(gymReducer.getAllGyms())
    gymsLoaded && dispatch(getAGym(id))      // if allGyms[id] is truthy then it will dispatch
  }, [dispatch, id, gymsLoaded])

  console.log(gym, '-------')

  // function findCurrentGym(gyms, id) {
  //   console.log(gyms, 'gyms inside the function')
  //   // console.log(id, 'id inside the function')
  //   // return gyms.filter((gym) => {
  //   //   return gym.id === id
  //   // })
  // }
  // gyms?.forEach(gym => console.log(gym?.id))

  // const findGymById = gyms?.find(gym => gym?.id === Number(id))
  // console.log(findGymById?.name, '------ gym by id')

  // const singleGym = findCurrentGym(gyms, id)
  // console.log(singleGym, 'Single Gym details')

  return gym && (
    <>
      <Flex
        h={'97vh'}
        bg={'lightblue'}
        align={"center"}
        justify={"center"}
      >
        {/* <Text>This is the page for</Text> */}
        {/* <Text>This is the page for {singleGym?.name}</Text> */}
        <Text>This is the page for {gym.name}</Text>

      </Flex>

    </>
  )
}
