import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
// import * as gymReducer from '../store/gyms'
// import { getOneGym } from '../store/gyms'
// import gyms from '../store/gyms'
import { getAGym } from '../store/gyms'
import { BiMap, BiPhone } from "react-icons/bi";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
import Geocode from "react-geocode";
import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  // Button,
} from "@chakra-ui/react"

export default function GymPages() {
  const gym = useSelector(state => state.gym?.singleGym);
  const gymsLoaded = useSelector(state => state.gym.loaded)
  const dispatch = useDispatch()
  const { id } = useParams()
  const classesInGym = useSelector(state => state.gym?.singleGym?.classSessions)
  const [load, setLoad] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const [map, setMap] = useState(null)


  // console.log(classesInGym, '.....?????')
  console.log(gym, '.....?????')

  useEffect(() => {
    // dispatch(gymReducer.getAllGyms())
    gymsLoaded && dispatch(getAGym(id))      // if allGyms[id] is truthy then it will dispatch
  }, [dispatch, id, gymsLoaded])

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/gyms/maps')
      const map = await response.json()
      setApiKey(map)
      // setLoadedMarkers(gymMarkers())
      setLoad(true)
    })()
  }, [gym])


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

  Geocode.setApiKey(apiKey);
  Geocode.setLanguage("en");
  Geocode.setRegion("us");
  Geocode.setLocationType("ROOFTOP");


  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const gymLat = gym?.lat
  const gymLng = gym?.lng

  const center = {
    lat: gymLat,
    lng: gymLng,
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return gym && (
    <>
      <Flex
        name={'gym-body-container'}
        h={'100vh'}
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
              src={gym.gym_url_image}
              h='567px'
            >
            </Image>
          </Flex>
          {/* <Flex
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
          </Flex> */}
          <Flex
            w='750px'
            bg='white'
            ml='350px'
          >

            <Flex
              name='gym-classes-container'
              h='auto'
              w='850px'
              // bg='purple'
              bg='#f7f7f7'
              direction='column'
            >
              {classesInGym.map((singleClass) => {
                return (
                  <Flex
                    key={singleClass.id}
                    h='100px'
                    // bg='yellow'
                    bg='#f7f7f7'
                    mt='50px'
                  // direction='column'
                  >
                    <Flex
                      // direction='column'
                      justify={'space-around'}
                      align={'center'}
                      bg='lightgray'
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
                zoom={18}
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
                {gym.name}
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
