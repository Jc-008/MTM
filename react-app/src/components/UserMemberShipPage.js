import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  Text,
  Image,
  // Input,
  // Stack,
  Button,
  Heading,
  // FormLabel,
  // Container,
  // InputGroup,
  // FormControl,
  useDisclosure,
  // useColorModeValue,
} from "@chakra-ui/react";
import { FaRegFileExcel } from 'react-icons/fa';
import { BaseOfModal } from './modal/modal';
import { showEditModal } from '../store/modal.js'



function UserMemberShipPage() {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure()

  console.log(user, '--------this is the user info')
  // console.log(state, '--------this is the user info')

  if (!user) {
    return null
  }

  let ownerOrNot
  if (user.is_owner) {
    ownerOrNot = (
      <Text mt={'50px'} ml={'25px'} fontSize={'25px'} fontWeight={'500'}>My Gym(s)</Text>
    )
  } else {
    ownerOrNot = (
      <Text mt={'50px'} ml={'25px'} fontSize={'25px'} fontWeight={'500'}>Reserved Classes</Text>
    )
  }

  let ifOwner
  if (user.is_owner) {
    ifOwner = (
      <Button
        h='125px'
        w='125px'
        colorScheme='blackAlpha'
      >
        <a href='/add-gym' >
          <i className="fa fa-plus"></i>
        </a>
      </Button>
    )
  } else {
    ifOwner = (
      Object.values(user.reserved_classes).map((singleClass) => {
        return (
          <Flex
            direction='column'
            mb='2em'
            bg='#f7f7f7'

          >
            <Link href={`/classes/${singleClass.id}`}>
              {singleClass.class.title}
            </Link>
            {singleClass.class.time}
          </Flex>
        )
      })
    )
  }
  console.log(Object.values(user.reserved_classes))


  function handleEdit() {
    dispatch(showEditModal())
  }

  return (
    <>
      <Flex>
        <Box
          name={'left-box'}
          h={'97vh'}
          w={'1000px'}
          bg={'#f7f7f7'}
        // bg={'lightblue'}
        >
          <Flex
            align={"center"}
            justify={"center"}
            mt={'200px'}
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
            fontSize='20px'
          >
            zipcode: {user.zipcode}
          </Text>
          {/* <Button
            rounded={'xl'}
            bg='#0055FF'
            color='white'
            _hover={{ bg: '#004de6' }}
            mt={'25px'}
            ml={'300px'}
            onClick={handleEdit}
          >
            Edit Details
          </Button> */}
          <Flex
            ml='270px'
            mt='30px'
          >
            <BaseOfModal />

          </Flex>
        </Box>
        <Flex
          direction={'column'}
          h={'97vh'}
          w={'100vw'}
        // bg={'lightpink'}
        >
          <Flex
            name={'right-box'}
            // bg={'lightpink'}
            h={'650px'}
            direction={'column'}
            border={'1px solid #f7f7f7'}
          >
            <Text
              align={"center"}
              justify={"center"}
              mt={'40px'}
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
              // borderColor="#d6d6d6"
              // border={'5px solid #f7f7f7'}
              border={'2px solid #e0e0e0'}
              bg={'white'}
              ml={'440px'}
            // mt={'75px'}
            >
              <Heading fontSize={'30px'} fontFamily={'body'}>
                Credit plan
              </Heading>
              <Image
                name={'membership-credit-image'}
                h={'175px'}
                src="https://user-images.githubusercontent.com/70030725/121602845-e29d0f80-ca15-11eb-9227-e01d833c9236.jpg"
                // mb={'25px'}
                ml={'90px'}
              >
              </Image>
              <Text fontSize={'20px'} fontWeight={'400'} >{user.available_credit} credits remaining</Text>
              <Link href={'/'} fontSize={'15px'} fontWeight={'500'} color={'#0055FF'}>Add more credits</Link>
            </Box>
          </Flex>
          <Flex
            name={'right-box'}
            // bg={'lightgray'}
            h={'500px'}
            border={'1px solid #f7f7f7'}
            direction='column'
          >
            {/* <Text
              mt={'50px'}
              ml={'25px'}
              fontSize={'25px'}
              fontWeight={'500'}
            >
              Past Classes
            </Text> */}
            {ownerOrNot}
            <Flex
              // bg='lightgreen'
              name='Add-button-flex'
              w='30em'
              h='150px'
              mt='50px'
              ml='25px'
            // justify='center'
            >
              <Box>
                {ifOwner}
                {/* {Object.values(user.reserved_classes).map((singleClass) => {
                  return (
                    <Flex
                      direction='column'
                      mb='2em'
                      bg='#f7f7f7'
                    >
                      <Link href={`/classes/${singleClass.id}`}>
                        {singleClass.class.title}
                      </Link>
                      {singleClass.class.time}
                    </Flex>
                  )
                })} */}
              </Box>

            </Flex>

          </Flex>
        </Flex>

      </Flex>
    </>


  )
}

export default UserMemberShipPage
