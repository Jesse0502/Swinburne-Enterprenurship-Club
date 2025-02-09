import Footer from "@/components/Footer";
import NotFopNavbar from "@/components/NotFopNavbar";
import { brandColor } from "@/helpers/constants";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <>
      <NotFopNavbar />
      <Center
        zIndex={999}
        flexDir={"column"}
        p="10"
        mt="12"
        pb="16"
        mx="50vh"
        rounded="2vh"
        shadow={"md"}
      >
        <Text fontWeight={"bold"} fontSize={"x-large"} py="5">
          Contact Us
        </Text>
        <Flex mt="3" w="full" gap="2">
          <Box flex="1">
            <Input placeholder="First Name" />
          </Box>
          <Box flex="1">
            <Input placeholder="Last Name" />
          </Box>
        </Flex>
        <Box w="full" pt="3">
          <Input placeholder="Email" />
        </Box>
        {/* <Box w="full" pt="3">
          <Input placeholder="Phone Number" />
        </Box> */}
        <Box w="full" pt="3">
          <Textarea placeholder="Message" />
        </Box>
        <Flex w="full" justify={"start"}>
          <Button
            _active={{}}
            _hover={{}}
            mt="2"
            bg={brandColor}
            color="white"
            w="full"
          >
            Submit
          </Button>
        </Flex>
      </Center>
      <Flex align="center" px="20%" gap="2">
        {/* Line on the left */}
        <Box flex="1" height="2px" bg="black" />

        {/* Text in the center */}
        <Text
          py="10"
          as="span"
          textAlign={"center"}
          fontWeight={"bold"}
          fontStyle={"italic"}
          fontSize={"x-large"}
        >
          Or Meet Us On Campus!
        </Text>
        {/* Line on the right */}
        <Box flex="1" height="2px" bg="black" />
      </Flex>

      <Center>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="750"
              height="450"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=swinburne university hawthorn&t=&z=13&ie=UTF8&iwloc=&output=embed"
              // @ts-ignore
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </Center>
      <Footer noBIP={true} />
    </>
  );
};

export default ContactUs;
