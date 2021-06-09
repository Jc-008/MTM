import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logout } from "../../store/session";
import { Button } from "@chakra-ui/react"

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    dispatch(logout());
    history.push('/')
  };

  return (
    <Button
      onClick={onLogout}
      _hover={{ color: "white", fontWeight: "bold", bg: '#dedede' }}
      variant={"outline"}
      borderColor="#d6d6d6"
      colorScheme="white"
    >
      Logout
    </Button>
  )
};

export default LogoutButton;

{/* <Button onClick={onLogout} _hover={{ color: "white", bg: "gray.500" }} colorScheme="white" variant="ghost">
      Logout
    </Button> */}
