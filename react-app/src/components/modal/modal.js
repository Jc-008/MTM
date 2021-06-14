import {
  Modal,                   //  The wrapper that provides context for its children.
  ModalOverlay,            //  The dimmed overlay behind the modal dialog.
  ModalContent,            //  The container for the modal dialog's content.
  ModalHeader,             //  The header that labels the modal dialog.
  ModalFooter,             //  The footer that houses the modal actions.
  ModalBody,               //  The wrapper that houses the modal's main content.
  ModalCloseButton,        //  The button that closes the modal.
  Button,
  useDisclosure,           //  A handler to handle the open, close etc of the modal
  useOutsideClick,         //  A handler to handle click when outside the ref element to close
  Link,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState, useEffect } from 'react';
// import
import ReactDOM from 'react-dom';
// import { SignUpForm } from "./SignUpForm";
// import { LoginForm } from "./LoginForm";
import EditModal from "./EditModal";
import { useSelector, useDispatch } from 'react-redux'
import { closeEditModal } from "../../store/modal";


export function BaseOfModal() {
  const modalStatus = useSelector(state => state.modal.editModal)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  // const initialRef = React.useRef()
  // const finalRef = React.useRef()

  useEffect(() => {
    if (modalStatus) {
      onOpen()
      console.log(onOpen)
    }
  }, [modalStatus])

  function handleClose() {
    onClose()
    dispatch(closeEditModal())
  }


  return (
    <>
      <Button onClick={onOpen} colorScheme="blue" _hover={{ color: "white", fontWeight: "bold", bg: "gray.500" }}> Edit Detail</Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>
            Edit Details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          </ModalBody>
          <EditModal />
          {/* <h1> hello this is the modal</h1> */}
          <ModalFooter>
            {/* <Button>
              Submit
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
