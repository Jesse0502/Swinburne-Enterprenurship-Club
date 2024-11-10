import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Footer = ({ noBIP = false }: { noBIP?: Boolean }) => {
  const router = useRouter();
  return (
    <Box mt="10" mb="-100px">
      {!noBIP && (
        <Flex
          onClick={() => {
            router.push("/our-events");
          }}
          _hover={{ textDecor: "underline", cursor: "pointer", shadow: "md" }}
          textAlign={"end"}
          // borderRightRadius={"200px"}
          color="white"
          boxShadow={"md"}
          fontWeight={"semibold"}
          bg="#fb233c"
          p="4"
          alignItems={"center"}
          w="36vh"
          gap="2"
          position="relative" // Needed for positioning the bookmark shape
          _after={{
            content: `''`,
            position: "absolute",
            right: "-60px", // Changed to left
            top: "0",
            shadow: "md",
            height: "100%",
            width: "60px",
            bg: "#fb233c",
            clipPath: "polygon(100% 100%, 100% 100%,0 0, 0 100%, 50% 50%)",
          }}
        >
          <Text>View Our Events</Text>
          <Image w="10" src="./icons8-arrow-64.png"></Image>
        </Flex>
      )}
      <Box
        mt="3"
        py="10"
        textAlign={"center"}
        bg="#fb233c"
        w="100%"
        color="white"
      >
        Swinburne Enterprenurship Club ©
      </Box>
    </Box>
  );
};

export default Footer;
