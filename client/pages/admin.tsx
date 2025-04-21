import NotFopNavbar from "@/components/AltNavbar";
import { brandColor } from "@/helpers/constants";
import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/admin-dashboard");
  };
  return (
    <Box h="100vh" backgroundImage="./swin-hero-2.jpg">
      <Center h="inherit">
        <Box
          bg="rgba(255,255,255,0.2)"
          w="45vh"
          flexDir={"column"}
          justifyContent={"center"}
          p="5"
          shadow={"md"}
          rounded="4vh"
        >
          <Text color={"white"} py="5" fontSize={"large"} fontWeight={"bold"}>
            Admin Login
          </Text>
          <Flex flexDir={"column"}>
            <Input variant={"solid"} placeholder="username" my="2" />
            <Input variant={"solid"} type="password" placeholder="password" />
            <Button mt="2" onClick={handleLogin}>
              Login
            </Button>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export default Admin;
