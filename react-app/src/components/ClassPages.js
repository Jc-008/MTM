import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getAllClasses } from '../store/classes'
import { BiMap, BiTime, BiMoney } from "react-icons/bi";
import { makeReservation, removeReservation } from '../store/classes'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
import Geocode from "react-geocode";
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
  const currentGym = currentClassDetails?.gym
  const [load, setLoad] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const [map, setMap] = useState(null)


  useEffect(() => {
    dispatch(getAllClasses())
  }, [dispatch])

  useEffect(() => {

    setReservation(!reservation)
  }, [userReserveClass])                      // listen to the state of userReserveClass at the specific ID


  useEffect(() => {
    (async () => {
      const response = await fetch('/api/gyms/maps')
      const map = await response.json()
      setApiKey(map)
      // setLoadedMarkers(gymMarkers())
      setLoad(true)
    })()
  }, [currentClassDetails])

  function handleReservation() {

    if (!userReserveClass) {   // created the reservation
      dispatch(makeReservation(id))

    } else {
      dispatch(removeReservation(userReserveClass.reservationId))
    }
  }



  Geocode.setApiKey(apiKey);
  Geocode.setLanguage("en");
  Geocode.setRegion("us");
  Geocode.setLocationType("ROOFTOP");


  const containerStyle = {
    width: '100%',
    height: '100%'
  };


  const gymLat = currentGym?.lat
  const gymLng = currentGym?.lng

  // console.log(gymLat, gymLng, 'gymlat & lng')

  const center = {
    lat: gymLat,
    lng: gymLng,
  };
  // console.log(center, 'center')

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <>
      <Flex
        name={'class-container'}
        h={'97vh'}
        // bg={'lightblue'}
        align={"center"}
        justify={"center"}
        mb='100px'
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
                justify='center'
                fontSize='20px'
                fontWeight='600'
                mt='25px'
                mb='100px'
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
          {load && (<Box
            name='map-container'
            border='1px solid black'
            w='375px'
            h='375px'
            ml='72px'
            mt='100px'
          >
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                // onLoad={onLoad}
                onUnmount={onUnmount}
              >
                <Marker
                  position={center}
                />
              </GoogleMap>
            </LoadScript>

          </Box>)}

          <Box
            name='gym-detail-container'
            // bg='white'
            bg='#f7f7f7'
            // align={"center"}
            justify={"center"}
            w='375px'
            h='350px'
            mt='25px'
            ml='72px'
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
