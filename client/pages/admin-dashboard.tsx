import { brandColor } from "@/helpers/constants";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Events");
  return (
    <Flex>
      <Box flex="1" h="100vh" pos="static" pt="9" shadow={"md"} bg={brandColor}>
        <Text
          pb="9"
          pl="2"
          color={"white"}
          fontWeight={"bold"}
          fontSize={"x-large"}
        >
          Admin Dashboard
        </Text>
        {["Events", "Commitee Members"].map((i) => (
          <Box
            my="1"
            py="5"
            w="100%"
            pl="4"
            _hover={{
              cursor: "pointer",
              bg: "rgba(255,255,255,1)",
              color: brandColor,
            }}
            bg={
              activeTab == i
                ? "rgba(255, 255, 255, 1)"
                : "rgba(255, 255, 255, 0.1)"
            }
            color={activeTab == i ? brandColor : "white"}
          >
            <Text
              onClick={() => {
                setActiveTab(i);
              }}
              fontSize={"large"}
              fontWeight={"bold"}
            >
              {i}
            </Text>
          </Box>
        ))}
      </Box>
      <Box flex="4" overflowY={"scroll"}></Box>
    </Flex>
  );
};

export default AdminDashboard;
