import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import LoginForm from './auth/LoginForm'
import { getAllClasses } from '../store/classes'
import {
  name,
  Wrap,
  WrapItem,
  Divider,
  Box,
  Image,
  Container,
  Center,
  LinkBox,
  LinkOverlay,
  Heading,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react"


export default function UserHomePage() {
  const gymClasses = Object.values(useSelector(state => state.classSession.allClassSessions))
  const dispatch = useDispatch()
  const { id } = useParams()

  console.log(gymClasses, '..... this is the classes')


  useEffect(() => {
    dispatch(getAllClasses())
  }, [dispatch])

  return (
    // <h1> This should be the search page</h1>
    <>
      <Flex
        bg='lightgray'
      >
        <Flex
          name='all-classes-container'
          direction='column'
          bg='lightskyblue'
          w='60%'
        // mt='50px'
        // h=''
        >
          {gymClasses.map((gymClass) => {
            return (
              <Flex
                key={gymClass.id}
                mt='2%'
              >
                <Link href={`/classes/${gymClass.id}`}
                >
                  {gymClass.title}
                </Link>

              </Flex>
            )
          })}
        </Flex>
        <Flex
          bg='linen'
          w='40%'
        >

        </Flex>

      </Flex>
    </>
  )

}
