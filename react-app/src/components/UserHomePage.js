import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import LoginForm from './auth/LoginForm'
import { getAllClasses } from '../store/classes'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
import Geocode from "react-geocode";
import {
  name,
  Wrap,
  WrapItem,
  Divider,
  Box,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react"


export default function UserHomePage() {
  const gymClasses = Object.values(useSelector(state => state.classSession.allClassSessions))
  const allGyms = Object.values(useSelector(state => state?.gym?.allGyms))
  const [gymsList, setGymsList] = useState(null)
  const [load, setLoad] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const dispatch = useDispatch()
  const { id } = useParams()
  const [map, setMap] = useState(null)

  // console.log(gymClasses, '..... this is the classes')
  console.log(allGyms, '..... allGyms')

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/gyms/maps')
      const map = await response.json()
      setApiKey(map)
      setLoad(true)
    })()
  })

  useEffect(() => {
    dispatch(getAllClasses())
  }, [dispatch])


  //  for geoCode--------------------------------- below
  Geocode.setApiKey(apiKey);
  Geocode.setLanguage("en");
  Geocode.setRegion("us");
  Geocode.setLocationType("ROOFTOP");

  // useEffect(() => {
  //   let gymsTempList = allGyms.map((gym) => {
  //     Geocode.fromAddress(gym.address).then(
  //       (response) => {
  //         const { lat, lng } = response.results[0].geometry.location;
  //         // console.log(lat, lng);
  //         gym.location = { lat, lng }
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   })
  //   setGymsList(gymsTempList)
  //   setLoad(true)
  // }, [])


  //  for maps ------------------------------------ Below
  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 40.748440,
    lng: -73.985664,
  };
  // console.log(center, '.... center')

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: `${apiKey}`
  // })

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  //---------------------------------------------------^
  return (
    // <h1> This should be the search page</h1>
    <>
      <Flex
        bg='lightgray'
      >
        <Flex
          name='all-classes-container'
          direction='column'
          bg='lightgrey'
          w='60%'
          h='97vh'
          overflow='scroll'
        // mt='50px'
        // h=''
        >
          {gymClasses.map((gymClass) => {
            return (
              <Flex
                key={gymClass.id}
                direction='column'
                justify='center'
              // mt='2%'
              >
                <Box
                  rounded='xl'
                  boxShadow={'0 4px 12px rgb(0 0 0 / 12%)'}
                  p={8}
                >
                  <Flex
                    justify='space-around'
                  >
                    <Link
                      href={`/classes/${gymClass.id}`}
                      fontWeight='600'
                      fontSize='18px'
                    >
                      {gymClass.title}
                    </Link>
                    <Text
                      fontWeight='400'
                      fontSize='15px'
                      justify='center'
                    >
                      {gymClass.time}

                    </Text>
                    <Text
                      fontWeight='400'
                      fontSize='15px'
                      justify='center'
                    >
                      {gymClass.gym.name}
                    </Text>
                  </Flex>
                </Box>

              </Flex>
            )
          })}
        </Flex>

        {load && (<Flex
          bg='linen'
          w='40%'
        >

          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
              // onLoad={onLoad}
              onUnmount={onUnmount}
            >
              {/* {gymsList != null && gymsList.map((gym, i) => {
              return (
                <Marker
                  key={i}
                  position={gym.location}
                >
                  {console.log(gym.location, '...... gym location')}
                </Marker>
              )
            })} */}

              {/* {allGyms.map(async (gym, i) => {
              let locationObj = {}

              let response = await Geocode.fromAddress(gym.address)
              const { lat, lng } = response.results[0].geometry.location;
              locationObj = { lat, lng }
              console.log(lat, lng);
              return (
                <Marker
                  key={i}
                  position={locationObj}
                >
                  {console.log(locationObj, '..... location object')}
                </Marker>
              )
            })} */}


              <Marker
                position={center}
              />
            </GoogleMap>
          </LoadScript>


        </Flex>)}

      </Flex>
    </>
  )

}
