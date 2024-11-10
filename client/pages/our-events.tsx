import Navbar from "@/components/Navbar";
import NotFopNavbar from "@/components/NotFopNavbar";
import EventTab from "@/components/EventTab";
import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import { Newsreader } from "next/font/google";
import { useEffect, useState } from "react";
import { eventsHistory } from "@/helpers/constants";
import Footer from "@/components/Footer";
const NewsreaderFont = Newsreader({ subsets: ["latin"] });

const PastEventsPage = () => {
  const [progress, setProgress] = useState(100);
  const [events, setEvents] = useState({});
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
      setProgress(100 - scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const thisEvents = {};
    eventsHistory.forEach((e) => {
      console.log(Object.keys(thisEvents));
      if (
        Object.keys(thisEvents) &&
        Object.keys(thisEvents).includes(`${e.date.getFullYear()}`)
      ) {
        thisEvents[e.date.getFullYear()] = [
          ...thisEvents[e.date.getFullYear()],
          e,
        ];
      } else {
        thisEvents[e.date.getFullYear()] = [e];
      }
    });
    console.log("thisEvents", thisEvents);
    setEvents(thisEvents);
  }, []);

  return (
    <Box
      w={["full", "full"]}
      className={NewsreaderFont.className}
      pos="relative"
    >
      <NotFopNavbar />
      <Flex px="20">
        <Flex flexDir={"column"} my="10" flex="2 1">
          <Box minH="50vh">
            <Text>Upcoming Events</Text>
            <EventTab />
          </Box>
          {Object.keys(events)
            .sort((a, b) => b - a)
            .map((i, index) => (
              <Box minH="50vh" mt="10">
                <Text fontSize={"xx-large"} fontWeight={"bold"} pb="1">
                  {i}
                </Text>
                <Flex flex="1 1 1" flexWrap={"wrap"} gap="2">
                  {events[+i].map((e) => (
                    <EventTab e={e} />
                  ))}
                </Flex>
              </Box>
            ))}
        </Flex>
        <Flex
          pos="sticky"
          top="40"
          pr="20"
          h="100px"
          alignItems={"center"}
          justify={"center"}
        >
          <Progress
            value={progress}
            mx="-20"
            transform="rotate(270deg)"
            // transformOrigin="top left" // Adjust origin as needed
            w="200px"
            size="xs"
            colorScheme="pink"
          />
          <Flex
            flexDir={"column"}
            align={"start"}
            justify={"space-between"}
            h="200px"
          >
            {Object.keys(events)
              .sort((a, b) => b - a)
              .map((i, index) => {
                const activeYear =
                  Math.round(
                    100 - ((index + 1) / Object.keys(events).length) * 100
                  ) < Math.round(progress);

                if (activeYear) {
                  return (
                    <Text flex="1 1" color={"red"}>
                      {i}
                    </Text>
                  );
                } else {
                  return (
                    <Text flex="1 1" color={"black"}>
                      {i}
                    </Text>
                  );
                }
              })}
          </Flex>
        </Flex>
      </Flex>
      <Footer noBIP={true} />
    </Box>
  );
};

export default PastEventsPage;
