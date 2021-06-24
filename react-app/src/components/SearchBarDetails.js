import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
// import * as gymReducer from '../store/gyms'
import { getAGym, getAllGyms } from '../store/gyms'
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
  // Link,
} from "@chakra-ui/react";


const SearchBarDetails = () => {
  const gyms = useSelector(state => Object.values(state.gym.allGyms));
  const dispatch = useDispatch()
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState('')
  // const gymList = Object.values(useSelector((state => state.gyms)))




  // console.log(gyms, '---this is all the gyms')


  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   setSearchTerm('')

  //   await dispatch(searchActions.searchFunc(searchTerm))
  //   history.push(`/search/${searchTerm}`)
  // }


  return (

    <form>
      {/* <form onSubmit={handleSearch}> */}
      <FormControl
        w="400px" h="55" bg="#FFFFFF" color='#000000' textAlign="center" paddingTop={5}
      >
        <InputGroup>
          <Input
            name={'searchBar-Input'}
            placeholder="Find a gym"
            rounded={'25px'}
            // borderRight={'hidden'}
            bg="white"
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type='Submit' rounded='25px' colorScheme="white" variant="ghost" _hover={{ color: "white", fontWeight: "bold", bg: '#dedede' }}><i className="fas fa-search"></i></Button>
        </InputGroup>
        <Flex
          direction='column'
        >
          {searchTerm && gyms.filter(gym => gym.name.toLowerCase().includes(searchTerm) || gym.address.toLowerCase().includes(searchTerm)).map(gym => (
            <SearchResult result={gym} key={gym.id} setSearchTerm={setSearchTerm} />
          ))}
        </Flex>
        {/* <div
          style={{display:'flex', flexDirection:'column'}}
        >
        </div> */}
      </FormControl>
    </form>
  )
}

function SearchResult({ result, setSearchTerm }) {
  const dispatch = useDispatch()

  const onClickGym = () => {
    setSearchTerm('')
  }

  return (<div className='single-result'>
    <Link
      onClick={onClickGym}
      to={`/gyms/${result.id}`}
    >
      <div>
        {result.name}
      </div>
    </Link>
  </div>)
}

export default SearchBarDetails;
