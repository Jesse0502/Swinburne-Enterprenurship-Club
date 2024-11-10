import { ExternalLinkIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { ExpandableText } from "./utils/ExpandableText";

const PastEventTab = ({ e }) => {
  console.log("i");
  console.log("i", e);
  return (
    <Box border="1px solid black" w="40vh" flex="1 1 1" rounded="md">
      <Image src={e?.image} h="30vh" w="40vh" objectFit={"cover"} />
      <Box p="2">
        <Link href={e?.link} target="_blank">
          <Text fontSize={"large"} fontWeight={"bold"} textDecor={"underline"}>
            {e?.title} {/* <Text as="span" pb="2"> */}
            <ExternalLinkIcon as="span" mb="1" />
            {/* </Text> */}
          </Text>
        </Link>
        <ExpandableText>
          <Text fontSize={"medium"} opacity={0.8}>
            {e?.description}
          </Text>
        </ExpandableText>
        <Flex alignItems={"center"} justify={"space-between"} py="2">
          <Text fontSize={"small"}>
            <TimeIcon as="span" mb="1" mr="1" opacity={0.8} />
            {new Date(e?.date).toDateString()}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default PastEventTab;
