import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getAllClasses } from '../store/classes'
import { BiMap, BiTime, BiMoney } from "react-icons/bi";
import { makeReservation, removeReservation } from '../store/classes'
// import { getAClass } from '../store/classes'
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
} from "@chakra-ui/react"


export default function ClassPages() {
  // Used without the loaded
  const allClasses = useSelector(state => state?.classSession?.allClassSessions)
  // const user = useSelector(state => state?.session.user)
  const dispatch = useDispatch()
  const { id } = useParams()
  const userReserveClass = useSelector(state => state?.session?.user?.reserved_classes[id])
  const [reservation, setReservation] = useState(!!userReserveClass)
  const currentClassDetails = allClasses[id]
  const currentGymName = currentClassDetails?.gym?.name
  const currentGymAddress = currentClassDetails?.gym?.address

  useEffect(() => {
    dispatch(getAllClasses())
  }, [dispatch])

  useEffect(() => {

    setReservation(!reservation)
  }, [userReserveClass])                      // listen to the state of userReserveClass at the specific ID


  // console.log(userReserveClass, '..... userReserveClass')


  function handleReservation() {

    if (!userReserveClass) {   // created the reservation
      dispatch(makeReservation(id))

    } else {
      dispatch(removeReservation(userReserveClass.reservationId))
    }
  }
  // function handleReservation() {

  //   if (!user.reserved_classes[id]) {   // created the reservation
  //     dispatch(makeReservation(id))

  //   } else {
  //     dispatch(removeReservation(user.reserved_classes[id].reservationId))
  //   }
  // }

  // function handleReservation() {
  //   if (!user.reserved_classes[id]) {   // created the reservation
  //     return (
  //       <Button ml='135px' mt='25px' onClick={() => dispatch(makeReservation(id))}>Reserve</Button>
  //     )
  //   } else {
  //     return (
  //       <Button ml='135px' mt='25px' onClick={() => dispatch(removeReservation(user.reserved_classes[id].reservationId))}>Cancel</Button>
  //     )
  //   }
  // }




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
              name='gym-class-description-container'
              // h='400px'
              w='850px'
              // bg='purple'
              bg='#f7f7f7'
              direction='column'
            >
              <Text
                fontSize='20px'
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
            w='350px'
            h='350px'
            mt='25px'
            ml='85px'
          // mt='100px'
          >
            <Flex
              justify='center'
            // alignContent='center'
            >
              <Text
                // ml='30px'
                mt='25px'
                fontSize='20px'
                fontWeight='700'
              >
                {currentGymName}
              </Text>

            </Flex>
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
                {currentGymAddress}
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
            <Button
              onClick={handleReservation}
              ml='135px'
              mt='25px'
            >
              {userReserveClass && 'Cancel'}
              {!userReserveClass && 'Reserve'}
            </Button>
            {/* {handleReservation()} */}
          </Box>

        </Flex>

      </Flex>

    </>
  )
}
