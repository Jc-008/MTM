import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { name, Wrap, WrapItem, Divider, Box, Image, Container, Center, LinkBox, LinkOverlay, Heading, Flex, Text } from "@chakra-ui/react"



export default function SplashPage() {


  return (
    <>
      <Flex
        w={'100vw'}
        h={'50px'}
        bg={'#fce172'}
        align={"center"}
        justify={"center"}
      >
        <Text fontWeight={'500'}>
          🎉 Gyms' are re-opening for classes 🎉
        </Text>
      </Flex>
      <Box
        name={'image-container'}
        mw={'100vw'}>
        <Image
          w={'100vw'}
          src="https://images.ctfassets.net/ew96z4wsnz93/2LGVlmCh6Apy9bAmXNvR8u/572c282fa3b69ca4f0618e95ffc4ffa2/Homepage_Hero-Image_Desktop2.jpg" />
      </Box>
      <Box>
        <Text>This is where the login form will be</Text>
      </Box>

    </>
  )


}


{/* <Container mw={'100vw'}>
<Image src="https://images.ctfassets.net/ew96z4wsnz93/2LGVlmCh6Apy9bAmXNvR8u/572c282fa3b69ca4f0618e95ffc4ffa2/Homepage_Hero-Image_Desktop2.jpg" />
</Container> */}
