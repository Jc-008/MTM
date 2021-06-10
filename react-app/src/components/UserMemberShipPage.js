import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  Text,
  Image,
  Input,
  Stack,
  Button,
  Heading,
  FormLabel,
  Container,
  InputGroup,
  FormControl,
  useDisclosure
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegFileExcel } from 'react-icons/fa';




function UserMemberShipPage() {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  // const { isOpen, onOpen, onClose } = useDisclosure()

  if (!user) {
    return null
  }

  return (
    <>
      <Flex>
        <Box
          name={'left-box'}
          h={'97vh'}
          w={'550px'}
          bg={'lightblue'}
        >
          <Flex
            align={"center"}
            justify={"center"}
            mt={'225px'}
          // direction={'row'}
          >
            <Text
              fontSize={'35px'}
              fontWeight={'600'}
            >
              {user.first_name} {user.last_name}
            </Text>
            {/* <Text>{user.last_name}</Text> */}

          </Flex>
          <Text
            align={"center"}
            justify={"center"}
          >
            zipcode: {user.zipcode}
          </Text>
        </Box>
        <Flex
          direction={'column'}
          h={'97vh'}
          w={'100vw'}
        // bg={'lightpink'}
        >
          <Flex
            name={'right-box'}
            bg={'lightpink'}
            h={'500px'}
            direction={'column'}
          >
            <Text
              mt={'50px'}
              ml={'25px'}
              fontSize={'35px'}
              fontWeight={'500'}
            >
              Membership
            </Text>
            <Box
              margin={'40px'}
              w={'400px'}
              h={'300px'}
              rounded={'2xl'}
              p={6}
              textAlign={'center'}
              variant={"outline"}
              borderColor="#d6d6d6"
              bg={'white'}
              ml={'75px'}
            >
              <Heading fontSize={'30px'} fontFamily={'body'}>
                Credit plan
              </Heading>
              <Image
                name={'membership-credit-image'}
                h={'200px'}
                src="https://user-images.githubusercontent.com/70030725/121602845-e29d0f80-ca15-11eb-9227-e01d833c9236.jpg"
                // mb={'25px'}
                ml={'80px'}
              >
              </Image>

            </Box>


          </Flex>
          <Flex
            name={'right-box'}
            bg={'lightgray'}
            h={'500px'}
          >
            <Text
              mt={'50px'}
              ml={'25px'}
              fontSize={'25px'}
              fontWeight={'500'}
            >
              Past Classes
            </Text>


          </Flex>
        </Flex>

      </Flex>
    </>


  )
}

export default UserMemberShipPage
