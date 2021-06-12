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
          justify={"center"}
        >
          <Box
            h='550px'
            w='750px'
            bg={'blue'}
            mt='100px'
            ml='235px'

          >
            This is where the picture will be{gym.gym_url_image}
          </Box>
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
            // align={"center"}
            justify={"center"}
            w='315px'
            h='350px'
            ml='90px'
          // mt='100px'
          >
            <Flex>
              <Text
                ml='15px'
                mt='30px'
              >
                <BiMap fontSize={'25px'} />
              </Text>
              <Text
                ml='30px'
                mt='25px'
                fontSize='20px'
                fontWeight='400'
              >
                {gym.address}
              </Text>

            </Flex>
            <Flex
            >
              <Text
                ml='15px'
                mt='30px'
              >
                <BiPhone fontSize={'25px'} />
              </Text>
              <Text
                ml='31px'
                mt='25px'
                fontSize='20px'
                fontWeight='400'
              >
                {gym.phone_number}
              </Text>
            </Flex>
          </Box>

        </Flex>

      </Flex>

    </>
  )
}
