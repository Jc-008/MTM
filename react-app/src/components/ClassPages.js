import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { FaPhoneAlt, FaDirections } from 'react-icons/fa'
import { getAClass } from '../store/classes'
import { BiMap, BiPhone } from "react-icons/bi";
import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  Button,
} from "@chakra-ui/react"


export default function ClassPages() {
  const singleClass = useSelector(state => state.classSession)
  const dispatch = useDispatch()
  const { id } = useParams()

  console.log(singleClass, '...... this is a single class ')

  return (
    <>
      <Flex
        name={'class-container'}
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
              // src={gym.gym_url_image}
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
              {/* {gym.name} */}
            </Text>
          </Flex>
          <Flex
            w='750px'
            bg='white'
            ml='350px'
          >

            <Flex
              // name='gym-classes-container'
              h='400px'
              w='850px'
              bg='purple'
              direction='column'
            >
              {/* {classesInGym.map((singleClass) => {
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
              })} */}
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
                {/* {gym.address} */}
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
                {/* {gym.phone_number} */}
              </Text>
            </Flex>
          </Box>

        </Flex>

      </Flex>

    </>
  )
}
