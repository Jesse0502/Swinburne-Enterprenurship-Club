import Navbar from "@/components/Navbar";
import AltNavbar from "@/components/AltNavbar";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Link,
  Select,
  Text,
} from "@chakra-ui/react";
import { brandColor, committeeMembers } from "@/helpers/constants";
import Footer from "@/components/Footer";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const Alumni = () => {
  const allYears = Object.keys(committeeMembers)
    .map(Number)
    .sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(allYears[0]);
  const [searchQuery, setSearchQuery] = useState("");

  // Get all members from all years
  const allMembers = useMemo(() => {
    return Object.values(committeeMembers).flat();
  }, []);

  // Filter members based on search query across all years
  const filteredMembers = useMemo(() => {
    if (!searchQuery.trim()) {
      // If no search query, show members from selected year
      return committeeMembers[selectedYear] || [];
    }

    const query = searchQuery.toLowerCase();
    return allMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query)
      // (member.description && member.description.toLowerCase().includes(query))
    );
  }, [searchQuery, selectedYear, allMembers]);
  return (
    <>
      <AltNavbar />
      <Center flexDir={"column"}>
        <Center w="full">
          <Image
            src="./swin-hero-4.jpg"
            w="full"
            h="40vh"
            objectFit={"cover"}
          />
          <Text
            pos={"absolute"}
            fontWeight={"bold"}
            fontSize={"xx-large"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"white"}
            textAlign={"center"}
          >
            Alumni
          </Text>
        </Center>
        {/* ------------------------------------------------ */}
        {/*  */}
        {/* ----------------------------------------------- */}
        <Flex
          w="full"
          flexDir={["column-reverse", "row"]}
          px={["4", "32"]}
          mt="14"
          justify={"space-between"}
          alignItems={["start", "center"]}
        >
          <Box w={["160px", "200px"]} mt={[10, 0]} mb={[-10, 0]}>
            <Select
              // variant={""}
              defaultValue={allYears[0]}
              isDisabled={!!searchQuery.trim()}
              onChange={(selected) => setSelectedYear(selected?.target.value)}
            >
              {allYears.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </Select>
          </Box>
          <Flex gap="2" w={["full", "48vh"]}>
            <Input
              size="lg"
              w={["full", "32vh"]}
              type="text"
              variant={"flushed"}
              placeholder={"Search Members"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              bg={brandColor}
              color="white"
              onClick={() => {
                if (searchQuery.trim()) {
                  // Clear search when button is clicked and there's a query
                  setSearchQuery("");
                }
              }}
            >
              {searchQuery.trim() ? "Clear" : "Search"}
            </Button>
          </Flex>
        </Flex>
        <Center px={["5", "32"]} mb="32" flexDir={"column"}>
          <Flex justify={"center"} gap="5" flexFlow={"wrap"} w="full" mt="16">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member, idx) => (
                <AlumniTab
                  key={`${member.name}-${idx}-${member.role}`}
                  member={member}
                />
              ))
            ) : (
              <Text fontSize="xl" color="gray.500">
                No members found matching your search
              </Text>
            )}
          </Flex>
        </Center>
      </Center>
      <Footer noBIP={true} />
    </>
  );
};

const AlumniTab = ({
  member,
}: {
  member: (typeof committeeMembers)[number][number];
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Center
      key={member.name}
      flexDir="column"
      bg="gray.100"
      p="3"
      color="black"
      h="max-content"
      flexBasis="calc(25% - 16px)" // Ensures 4 items per row, accounting for gap
      w="full"
      // maxW="calc(25% - 16px)" // Prevents items from stretching
    >
      <Box
        p="3"
        bg="white"
        overflow={"clip"}
        rounded="full"
        pos="relative"
        transition={"all"}
        transitionDuration={"1s"}
        // w="250px"
        // h="240px"
      >
        <Avatar
          w="200px"
          h="200px"
          pos={"relative"}
          src={member.image || member.name}
        />

        {/* <Image
                  p="1"
                  bg="white"
                  //   display={"none"}
                  rounded="full"
                  src="/icons8-linkedin-48.png"
                  w="45px"
                  left={"43%"}
                  bottom={"0"}
                  pos="absolute"
                  zIndex={99999}
                /> */}
      </Box>
      <Text fontWeight={"bold"} fontSize={"lg"} mt="3">
        {member.name} ({member.year})
      </Text>
      <Text opacity="0.7">{member.role}</Text>
      <Text
        w="35vh"
        noOfLines={showMore ? Infinity : 4}
        textAlign={"center"}
        mt="2"
        dangerouslySetInnerHTML={{ __html: `${member.description}` }}
      ></Text>
      <Text
        onClick={() => {
          setShowMore(!showMore);
        }}
        as="span"
        opacity={0.7}
        _hover={{ cursor: "pointer" }}
        textDecor={"underline"}
      >
        {" "}
        {showMore ? "Show Less" : "Show More"}
      </Text>
      <Box w="full" px="2px" bg="gray.200" h="2px" my="2" />
      <Flex>
        {member.socialMedia?.map((i) => (
          <Link href={i.link}>
            <Image
              rounded="full"
              src={
                i.platform.toLowerCase().includes("instagram")
                  ? "/icons8-instagram-48.png"
                  : i.platform.toLowerCase().includes("linkedin")
                  ? "/icons8-linkedin-48.png"
                  : ""
              }
              w="40px"
              left={"43%"}
              bottom={"0"}
              // zIndex={99999}
            />
          </Link>
        ))}
      </Flex>
    </Center>
  );
};

export default Alumni;
