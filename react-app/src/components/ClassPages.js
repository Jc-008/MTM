import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { FaPhoneAlt, FaDirections } from 'react-icons/fa'
import { getAClass } from '../store/classes'
import { BiMap, BiPhone } from "react-icons/bi";
import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  Button,
} from "@chakra-ui/react"


export default function ClassPages() {
  const singleClass = useSelector(state => state.classSession)
  const dispatch = useDispatch()
  const { id } = useParams()

  console.log(singleClass,'...... this is a single class ')

  return (
    <>
      <Flex>
        This is the page for
      </Flex>
    </>
  )
}
