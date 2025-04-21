import { Avatar, Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import AnimateOnVisible from "./AnimateOnVisible";
import { Newsreader } from "next/font/google";
import { committeeMembers } from "@/helpers/constants";

const NewsreaderFont = Newsreader({ subsets: ["latin"] });

const CommiteeMembers = () => {
  const currentCommiteeMembers = committeeMembers[new Date().getFullYear()];
  return (
    <Box minHeight="120vh" mt="10" overflowX={"clip"}>
      <AnimateOnVisible position={1}>
        <Text
          className={NewsreaderFont.className}
          textAlign="center"
          fontSize="xx-large"
          justifyItems={"center"}
          fontStyle="italic"
          zIndex={99999}
          bg=""
          mb="20"
          //   shadow={"lg"}
        >
          Committee Members
        </Text>

        {currentCommiteeMembers.slice(0, 3).map((i, index) => (
          <>
            <Center my="10" flexDir={"column"}>
              <Avatar
                //   h="52"
                w="44"
                h="44"
                name={i.name}
                shadow={"lg"}
                mb="3"
                src={i.image || ""}
              ></Avatar>
              <Text className={NewsreaderFont.className} fontWeight={"bold"}>
                {i.name}
              </Text>
              <Text className={NewsreaderFont.className}>{i.role}</Text>
            </Center>
          </>
        ))}
        <Flex justify={"center"} gap={[5, 20]} flexWrap={"wrap"}>
          {currentCommiteeMembers.slice(3).map((i) => (
            <Center my="10" flex="10 10 10" flexDir={"column"}>
              <Avatar
                //   h="52"
                w="32"
                h="32"
                shadow={"lg"}
                mb="3"
                name={i.name}
                src={i.image || ""}
              ></Avatar>
              <Text className={NewsreaderFont.className} fontWeight={"bold"}>
                {i.name}
              </Text>
              <Text className={NewsreaderFont.className}>{i.role}</Text>
            </Center>
          ))}
        </Flex>
      </AnimateOnVisible>
    </Box>
  );
};
export default CommiteeMembers;
