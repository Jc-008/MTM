import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { login } from "../../store/session";
import * as sessionActions from "../store/session"
import {
  Box,
  Flex,
  Link,
  Text,
  Image,
  Input,
  Stack,
  Button,
  FormLabel,
  InputGroup,
  FormControl,
} from "@chakra-ui/react";

export default function AddGymForm() {
  const [newGymName, setNewGymName] = useState("")
  const [newGymAddress, setNewGymAddress] = useState("")
  const [newGymPhoneNum, setNewGymPhoneNum] = useState("")
  const [photo, setPhoto] = useState("")
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const [errors, setErrors] = useState([]);
  const gymOwnerId = useSelector(state => state.session.user.id)
  // console.log(gymOwnerId, '------ gymOwnerId')
  const dispatch = useDispatch()
  const history = useHistory()


  const handleSubmit = async (e) => {
    e.preventDefault()

    await dispatch()
  }

  return (
    <>
      <Flex
        align={"center"}
        justify={"center"}
        h={'82vh'}
        // mb={'100px'}
        bg={'#f7f7f7'}
      >
        <Box
          w={'450px'}
          // rounded={'xl'}
          // bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'0 4px 12px rgb(0 0 0 / 24%)'}
          p={8}
        // mt={'100px'}
        // h={'555px'}
        >
          <Text
            align={"center"}
            justify={"center"}
            fontSize={'25px'}
            fontWeight={'600'}
            mt={'15px'}
            mb={'25px'}
          >
            Add A Gym
          </Text>
          {/* <form onSubmit={handle_Business_Submit}> */}
          <form>
            <div>
              {errors?.map((error, idx) => <span key={idx}>{error}</span>)}
            </div>
            <Stack spacing={3}>
              <FormControl isRequired>
                <FormLabel>Gym Name</FormLabel>
                <InputGroup>
                  <Input
                    placeholder=" Gym Name"
                    type='text'
                    value={newGymName}
                    onChange={(e) => setNewGymName(e.target.value)}
                    mb={'25px'}
                  />
                </InputGroup>
                <FormLabel>Address</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Address"
                    type='text'
                    value={newGymAddress}
                    onChange={(e) => setNewGymAddress(e.target.value)}
                    mb={'25px'}
                  />
                </InputGroup>
                <FormLabel>Phone Number</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Phone Number"
                    type='tel'
                    value={newGymPhoneNum}
                    onChange={(e) => setNewGymPhoneNum(e.target.value)}
                    mb={'25px'}
                  />
                </InputGroup>
                {/* <FormLabel>Latitude</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Latitude"
                    type='number'
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    mb={'25px'}
                  />
                </InputGroup>
                <FormLabel>Longitude</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Longitude"
                    type='number'
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    mb={'25px'}
                  />
                </InputGroup> */}
                <FormLabel>Gym Photo or Logo</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Picture"
                    type='file'
                    value={photo}
                    onChange={(e) => setPhoto(e.target.file[0])}
                    mb={'25px'}
                  />
                </InputGroup>
                {/* <br /> */}
                <Flex
                  align={"center"}
                  justify={"center"}
                // mb={'15px'}
                >
                  <Button type='Submit' bg='#0055FF' color='white' _hover={{ bg: '#004de6' }}>Add</Button>
                </Flex>
              </FormControl>
            </Stack>
          </form>
        </Box>

      </Flex>
    </>

  )
}
