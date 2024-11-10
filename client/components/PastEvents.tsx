import {
  AbsoluteCenter,
  Box,
  Center,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useParallax } from "react-scroll-parallax";
import { Newsreader } from "next/font/google";
import AnimateOnVisible from "./AnimateOnVisible";
import { eventsHistory } from "@/helpers/constants";

const NewsreaderFont = Newsreader({ subsets: ["latin"] });

const PastEvents = () => {
  const [positions, setPositions] = useState([]);

  // @ts-ignore
  const getRandomPosition = (usedPositions, imageWidth, imageHeight) => {
    const maxAttempts = 100;
    let attempts = 0;
    // @ts-ignore
    let position;

    do {
      const randomX = Math.random() * (window.innerWidth - imageWidth);
      const randomY = Math.random() * (window.innerHeight - imageHeight);
      position = { x: randomX, y: randomY };
      attempts++;
    } while (
      attempts < maxAttempts &&
      usedPositions.some(
        // @ts-ignore
        (usedPosition) =>
          // @ts-ignore
          position.x < usedPosition.x + imageWidth &&
          // @ts-ignore
          position.x + imageWidth > usedPosition.x &&
          // @ts-ignore
          position.y < usedPosition.y + imageHeight &&
          // @ts-ignore
          position.y + imageHeight > usedPosition.y
      )
    );

    return position;
  };

  useEffect(() => {
    const imageWidth = 200;
    const imageHeight = 200;
    const newPositions: any = [];

    Object.values(eventsHistory).forEach(() => {
      const newPosition = getRandomPosition(
        newPositions,
        imageWidth,
        imageHeight
      );
      newPositions.push(newPosition);
    });

    setPositions(newPositions);
  }, []);

  return (
    <>
      <Box
        overflowX={"clip"}
        position="relative"
        width="full"
        minHeight="100vh"
        pl={[7, 0]}
      >
        <Center
          top="40%"
          mb="48"
          mt="12"
          pt="-12"
          textAlign={"center"}
          h="inherit"
          zIndex={998}
          position="sticky"
          w="full"
        >
          <AnimateOnVisible>
            <Text
              position={"relative"}
              w="100%"
              className={NewsreaderFont.className}
              // minHeight="120vh"
              textAlign="center"
              fontSize="xx-large"
              justifyItems={"center"}
              fontStyle="italic"
              px="4"
              py="16"
              rounded="full"
              bg="white"
              //   textShadow={"2px 2px 2px rgba(0,0,0,0.2)"}
              //   fontWeight={"30px"}
            >
              Past Events
            </Text>
          </AnimateOnVisible>
        </Center>
        {Object.values(eventsHistory).map((src, index) => (
          <ScrambledPicture
            link={src.link}
            src={src.image}
            index={index}
            positions={positions}
          />
        ))}
      </Box>
    </>
  );
};

const ScrambledPicture = ({ link, src, index, positions }) => {
  const position = positions[index];
  if (!position) return <></>;
  const { ref } = useParallax({
    speed: Math.random() * 20,
  });
  return (
    <Link href={link}>
      <Image
        ref={ref}
        key={index}
        src={src}
        transition="ease 0.3s"
        _hover={{
          // height: "max-content",
          // width: "max-content",
          width: ["170px", "230px"],
          height: ["170px", "230px"],
          //   transform: "scale(1.2)",
          //   transform: "scale(1.2)",
          zIndex: 99,
          cursor: "pointer",
          shadow: "12px 12px 12px rgba(0,0,0,0.2)",
        }}
        // _hover={{}}
        position="absolute"
        left={`${position.x}px`}
        top={`${position.y}px`}
        width={["150px", "200px"]}
        height={["150px", "200px"]}
        objectFit="cover"
        borderRadius="md"
        boxShadow="lg"
        zIndex={index}
      />
    </Link>
  );
};

export default PastEvents;
