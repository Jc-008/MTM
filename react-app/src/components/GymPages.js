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
  Image,
  Link,
  Button,
} from "@chakra-ui/react"

export default function GymPages() {
  const gym = useSelector(state => state.gym.singleGym);
  const gymsLoaded = useSelector(state => state.gym.loaded)
  const dispatch = useDispatch()
  const { id } = useParams()
  const classesInGym = useSelector(state => state.gym?.singleGym?.gymClasses)
  console.log(classesInGym, '.....?????')

  useEffect(() => {
    // dispatch(gymReducer.getAllGyms())
    gymsLoaded && dispatch(getAGym(id))      // if allGyms[id] is truthy then it will dispatch
  }, [dispatch, id, gymsLoaded])

  // console.log(gym, '-------')

  // function eachSingleClass() {
  //   classesInGym?.forEach((singleClass) => console.log(singleClass))
  // }

  // eachSingleClass()
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
        name={'gym-body-container'}
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
          // justify={"center"}
          align={"center"}
          direction={'column'}
        >
          <Flex
            name={'Image-container'}
            h='650px'
            w='850px'
            bg={'#f7f7f7'}
            mt='100px'
            ml='350px'
            justify={"center"}
            align={"center"}
          >
            <Image
              src={gym.gym_url_image}
              h='567px'
            >
            </Image>
          </Flex>
          <Flex
            w='850px'
            bg='white'
            ml='350px'
            justify='center'
          >
            <Text
              fontSize='30px'
              fontWeight='600'
              mt='25px'
              justify='center'
            >
              {gym.name}
            </Text>
          </Flex>
          <Flex
            w='750px'
            bg='white'
            ml='350px'
          >

            <Flex
              name='gym-classes-container'
              h='400px'
              w='850px'
              bg='purple'
              direction='column'
            >
              {classesInGym.map((singleClass) => {
                return (
                  <Flex
                    key={singleClass.id}
                    h='100px'
                    bg='yellow'
                    mt='50px'
                  // direction='column'
                  >
                    <Flex
                      // direction='column'
                      justify={'space-around'}
                      align={'center'}
                      bg='lightslategray'
                      w='100%'

                    >
                      <Flex
                      // ml='50px'
                      // bg='white'
                      >
                        <Link href={`/classes/${singleClass.id}`} fontSize='20px' fontWeight='500'> {singleClass.title} </Link>

                      </Flex>
                      <Flex
                        // ml='100px'
                        justify='center'
                        // bg='blue'
                        w='200px'
                      >
                        <Text fontSize='20px'> {singleClass.time}</Text>
                      </Flex>

                    </Flex>
                  </Flex>
                )
              })}
            </Flex>








          </Flex>
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
            w='375px'
            h='375px'
            ml='72px'
            mt='100px'
          >
          </Box>
          <Box
            name='gym-detail-container'
            bg='white'
            // align={"center"}
            justify={"center"}
            w='315px'
            h='350px'
            ml='102px'
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
