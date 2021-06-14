import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { FaPhoneAlt, FaDirections } from 'react-icons/fa'
import { getAllClasses } from '../store/classes'
import { getAClass } from '../store/classes'
import { BiMap, BiTime, BiMoney } from "react-icons/bi";
import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  Button,
} from "@chakra-ui/react"


export default function ClassPages() {
  // Used without the loaded
  const singleClass = Object.values(useSelector(state => state?.classSession?.allClassSessions))

  const dispatch = useDispatch()
  const { id } = useParams()
  const currentClassDetails = singleClass[id - 1]

  useEffect(() => {
    dispatch(getAllClasses())
  }, [dispatch])

  console.log(id, '.... this is ID')
  console.log(currentClassDetails?.imageUrl, '...... this is a single class ')

  // const classes = useSelector(state => state?.classSession?.singleClassSession);
  // const classesLoaded = useSelector(state => state.classSession.loaded)
  // const dispatch = useDispatch()
  // const { id } = useParams()
  // // const

  // console.log(classes, ' this is the classes with loaded')

  // useEffect(() => {
  //   classesLoaded && dispatch(getAClass(id))
  // }, [dispatch, id, classesLoaded])

  return (
    <>
      <Flex
        name={'class-container'}
        h={'97vh'}
        // bg={'lightblue'}
        align={"center"}
        justify={"center"}
      >
        <Flex
          name='left-container'
          w='60%'
          // bg='lightcoral'
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
              src={currentClassDetails?.imageUrl}
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
              {currentClassDetails?.title}
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
              // bg='purple'
              bg='#f7f7f7'
              direction='column'
            >
              <Text
                fontSize='30px'
                fontWeight='600'
                mt='25px'
                justify='center'
              >
                {currentClassDetails?.description}
              </Text>

            </Flex>


          </Flex>
        </Flex>
        <Flex
          name='right-container'
          w='40%'
          // bg='lightgreen'
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
            // bg='white'
            bg='#f7f7f7'
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
                <BiTime fontSize={'25px'} />
              </Text>
              <Text
                ml='31px'
                mt='25px'
                fontSize='20px'
                fontWeight='400'
              >
                {currentClassDetails?.time}
              </Text>
            </Flex>
            <Flex
            >
              <Text
                ml='15px'
                mt='30px'
              >
                <BiMoney fontSize={'25px'} />
              </Text>
              <Text
                ml='31px'
                mt='25px'
                fontSize='20px'
                fontWeight='400'
              >
                {currentClassDetails?.cost} Credits
              </Text>
            </Flex>
          </Box>

        </Flex>

      </Flex>

    </>
  )
}
