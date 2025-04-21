// Buy a ticket, get a confirmation QR code
// Buy a ticket, user pdf for QR code confirmation, add clyb emial, make a new page for payments, remove, alumni page history of club

import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import AnimateOnVisible from "@/components/AnimateOnVisible";
import { useParallax } from "react-scroll-parallax";
import ArrowAnimation from "@/components/Animation/ArrowAnimation";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Newsreader } from "next/font/google";
import Footer from "@/components/Footer";

const PastEventComponentWithNoSSR = dynamic(
  () => import("../components/PastEvents"),
  { ssr: false }
);

const CommiteeMembersComponentWithNoSSR = dynamic(
  () => import("../components/CommiteeMembers"),
  { ssr: false }
);

const NewsreaderFont = Newsreader({ subsets: ["latin"] });

export default function Home() {
  const { ref } = useParallax({
    speed: 30,
    opacity: [2, 0],
  });
  const { ref: ref2 } = useParallax({
    speed: 20,
    rotateX: [20, 2],
    // opacity: [2, 0],
  });
  const chooseRandom = [
    "./swin-hero-2.jpg",
    "swin-hero.jpg",
    "swin-hero-3.jpg",
  ];
  const welcomeRef = useRef(null);
  const scrollToWelcome = () => {
    setTimeout(() => {
      window.scroll({ top: 430, behavior: "smooth" });
    }, 400);
  };

  return (
    <Box
      w={["full", "full"]}
      className={NewsreaderFont.className}
      pos="relative"
    >
      <Navbar />

      <Box
        id="hero"
        // @ts-ignore
        ref={ref}
        mt={["-28", "-20"]}
      >
        <Image
          w="full"
          h={["110vh", "100vh"]}
          objectFit={"cover"}
          src={chooseRandom[Math.floor(Math.random() * chooseRandom.length)]}
        />
        <Text
          color="white"
          fontSize={["42px", "45px"]}
          fontWeight={"bold"}
          pos="absolute"
          // fontFamily={"cursive"}
          top={["34%", "41%"]}
          // left="27%"
          w="full"
          textAlign={"center"}
          className={NewsreaderFont.className}
        >
          Swinburne Enterprenurship Club
        </Text>
        <Text></Text>
        <Flex
          w="full"
          justify={"center"}
          alignItems={"center"}
          pos="absolute"
          bottom={[12, 3]}
        >
          {/* <Image h="28" src={"./arrow-animation.gif"} /> */}
          <ArrowAnimation
            reference={welcomeRef.current}
            className={""}
            scrollToWelcome={scrollToWelcome}
          />
        </Flex>
      </Box>
      <Flex
        flexDirection={["column-reverse", "row"]}
        // @ts-ignore
        ref={ref2}
        mt={["-30vh", "-10vh"]}
        mb="14vh"
        // h="100vh"
        px="10"
        justify={"space-evenly"}
        alignItems={"center"}
      >
        <Box w={["90%", "90vh"]}>
          <AnimateOnVisible position={1}>
            <Text mt="4" fontSize={"larger"} opacity={0.8}>
              The Swinburne Entrepreneurship Club (SEC) is a collective effort
              comprising university programs and student associations that
              provide platforms for the Swinburne community to delve into and
              understand different facets of entrepreneurship.
            </Text>
          </AnimateOnVisible>
          <AnimateOnVisible position={2}>
            <Text
              mt="4"
              fontSize={"medium"}
              opacity={0.8}
              fontWeight={"medium"}
            >
              Swinburne University's entrepreneurial landscape is vibrant and
              inclusive, deeply intertwined with Melbourne's innovation hubs and
              global networks. Our university's entrepreneurial endeavors are
              decentralized, thriving through the collaborative efforts of
              students, faculty, and staff involved in various events and
              initiatives tailored for the Swinburne community. We encourage you
              to explore the organizations within our network listed below.
            </Text>
          </AnimateOnVisible>
          <AnimateOnVisible position={3}>
            <Text
              mt="4"
              fontSize={"medium"}
              opacity={0.8}
              fontWeight={"medium"}
            >
              Visit our Team Formation Hub for assistance in assembling your
              Entrepreneurial Team. Connect with potential team members, explore
              hands-on entrepreneurial courses, and access guides featuring tips
              and best practices for creating and maintaining an exceptional
              entrepreneurial team.
            </Text>
          </AnimateOnVisible>
        </Box>
        <AnimateOnVisible position={1}>
          <Image h="64" src="./logo-ol.jpg" mb={["3vh", 0]} />
        </AnimateOnVisible>
      </Flex>
      <PastEventComponentWithNoSSR />
      <CommiteeMembersComponentWithNoSSR />
      <Footer />
    </Box>
  );
}
