import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
// import * as gymReducer from '../store/gyms'
// import { getOneGym } from '../store/gyms'
import { getAGym } from '../store/gyms'
// import gyms from '../store/gyms'
import { FaPhoneAlt, FaDirections } from 'react-icons/fa'
import { BiMap, BiPhone } from "react-icons/bi";
import {
  Box,
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

  useEffect(() => {
    // dispatch(gymReducer.getAllGyms())
    gymsLoaded && dispatch(getAGym(id))      // if allGyms[id] is truthy then it will dispatch
  }, [dispatch, id, gymsLoaded])

  // console.log(gym, '-------')

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
        <Flex
          name='left-container'
          w='60%'
          bg='lightcoral'
          h='97vh'
        >

        </Flex>
        <Flex
          name='right-container'
          w='40%'
          bg='lightgreen'
          h='97vh'
          direction='column'
        >
          <Box
            name='map-container'
            border='1px solid black'
            w='350px'
            h='350px'
            ml='75px'
            mt='100px'
          >

          </Box>
          <Box
            bg='white'
            align={"center"}
            justify={"center"}
            w='350px'
            h='350px'
            ml='75px'
          // mt='100px'
          >
            <Flex>
              <Text
                ml='50px'
              >
                <BiMap fontSize={'25px'} />
              </Text>
              <Text
                ml='30px'
              >
                {gym.address}
              </Text>

            </Flex>
            <Flex
            // ml='75px'
            // justify={'space-evenly'}

            >
              <Text
                ml='50px'
              >
                <BiPhone fontSize={'25px'} />
              </Text>
              <Text
                ml='50px'
              >
                {gym.phone_number}
              </Text>
            </Flex>
            {/* <Flex
              // ml='75px'
              justify={'space-evenly'}
              direction={'column'}

            >
              <FaDirections fontSize={'25px'} />
              {gym.address}
              <FaPhoneAlt fontSize={'25px'} />
              {gym.phone_number}

            </Flex> */}
          </Box>

        </Flex>

      </Flex>

    </>
  )
}
