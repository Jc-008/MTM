import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import * as searchActions from '../../store/search'

import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  isRequired,
  Stack,
  Flex,
} from "@chakra-ui/react";


const SearchBarFormPt2 = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState('')

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   setSearchTerm('')

  //   await dispatch(searchActions.searchFunc(searchTerm))
  //   history.push(`/search/${searchTerm}`)
  // }


  return (

    <form onSubmit>
      {/* <form onSubmit={handleSearch}> */}
      <FormControl
        w="300px" h="55" bg="#FFFFFF" color='#000000' textAlign="center" paddingTop={5}
      >
        <InputGroup>
          <Input
            placeholder="Location"
            rounded={'25px'}
            // borderLeft={'hidden'}
            bg="white"
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type='Submit' rounded='25px' colorScheme="white" variant="ghost" _hover={{ color: "white", fontWeight: "bold", bg: '#dedede' }}><i className="fas fa-search"></i></Button>
          {/* <Button onClick={handleSearch} type='Submit' colorScheme="white" variant="ghost" _hover={{ color: "white", fontWeight: "bold", bg: "gray.400" }}><i className="fas fa-search"></i></Button> */}
        </InputGroup>
      </FormControl>
    </form>
  )
}

export default SearchBarFormPt2;
