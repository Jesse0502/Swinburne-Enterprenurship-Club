import NotFopNavbar from "@/components/AltNavbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { brandColor } from "@/helpers/constants";
import { Box, Button, Center, Flex, Image, Link, Text } from "@chakra-ui/react";

const Event = () => {
  return (
    <>
      <NotFopNavbar />
      <Flex gap="3" my="10" px="8" alignItems={"center"}>
        <Center flex="2">
          <Image w="60vh" src="pev_4.jpg" />
        </Center>
        <Box flex="3" w="full">
          <Text fontWeight={"bold"} fontSize={"xxx-large"} mb="5">
            Movie Night
          </Text>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio
            consectetur itaque enim corporis voluptates commodi ratione neque
            blanditiis, natus odit earum! Reiciendis dolor consequuntur iste
            voluptatem fugiat culpa ipsa recusandae sequi rerum, esse modi eos
            enim. Dolores tempore aliquam ad alias id fugit. Esse iure enim eos
            iste autem.
          </Text>
          <Button
            mt="5"
            isDisabled
            _hover={{}}
            _active={{}}
            color="white"
            bg={brandColor}
          >
            Free
          </Button>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Event;
