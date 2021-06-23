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
  Container,
} from "@chakra-ui/react";

export default function AddGymForm() {
  const [newGymName, setNewGymName] = useState("")
  const [newGymAddress, setNewGymAddress] = useState("")
  const [newGymPhoneNum, setNewGymPhoneNum] = useState("")
  const [gymPicture, setGymPicture] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()


  return (
    <>

      )

}
