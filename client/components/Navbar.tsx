import { brandColor } from "@/helpers/constants";
import { debounce, throttle } from "@/helpers/Limitors";
import routes from "@/helpers/routes";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [navbarExpanded, setNavbarExpanded] = useState(true);
  const [mobileNavbarCollapsed, setMobileNavbarCollapsed] = useState(true);
  const [transparency, setTransparency] = useState(0.0);
  const [textColor, setTextColor] = useState("white");
  const [navBtnColor, setNavBtnColor] = useState(brandColor);
  function handleScroll() {
    if (window.pageYOffset > 50) {
      setNavbarExpanded(false);
    } else if (window.pageYOffset < 50) {
      setNavbarExpanded(true);
    }
    if (window.pageYOffset > 200) {
      setTransparency(1);
      setTextColor(brandColor);
      setNavBtnColor("white");
    } else {
      setTransparency(window.pageYOffset / 500.0);
      setTextColor("white");
      setNavBtnColor(brandColor);
    }

    setMobileNavbarCollapsed(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(debounce(handleScroll)));
    return () =>
      window.removeEventListener("scroll", throttle(debounce(handleScroll)));
  }, []);

  const router = useRouter();

  return (
    <>
      <Flex
        zIndex={999}
        align={"center"}
        justify={"space-between"}
        shadow={transparency > 0.5 ? "md" : "none"}
        h="20"
        px="5"
        style={
          mobileNavbarCollapsed
            ? {
                backgroundColor: `rgba(255, 255, 255, ${transparency * 0.9})`,
                backdropFilter: `blur(${transparency * 5}px)`,
              }
            : {
                backgroundColor: `rgba(255, 255, 255, 0.85)`,
                backdropFilter: `blur(${transparency * 5}px)`,
              }
        }
        color="white"
        pos="sticky"
        top="0"
      >
        <Flex
          _hover={{ cursor: "pointer" }}
          style={{
            color: `rgba(224, 30, 52, ${transparency * 0.9})`,
          }}
          gap="1"
          alignItems={["center", "baseline"]}
        >
          {" "}
          <Text as="span" fontSize={"25px"} fontFamily={"cursive"}>
            Swinburne|
          </Text>
          <Flex
            fontSize={["small", "medium"]}
            gap={["0", "1"]}
            flexDir={["column", "row"]}
          >
            <Text>Enterprenurship </Text> <Text>Club</Text>
          </Flex>
        </Flex>
        {/* <Image mt="2" ml="-7" h="110px" src="./logo.png" /> */}
        <HamburgerIcon
          color={textColor === "white" ? "white" : brandColor}
          onClick={onOpen}
          display={["block", "none"]}
          fontSize={"xx-large"}
        />
        <Flex align={"center"} gap="5" display={["none", "flex"]}>
          {routes.map((text) => (
            <Text
              onClick={() => {
                router.push(text.link);
              }}
              opacity={0.9}
              color={textColor}
              cursor={"pointer"}
              fontWeight={"semibold"}
              _hover={{ opacity: 1 }}
            >
              {text.name}
            </Text>
          ))}
          <Link
            style={{}}
            href={
              "https://studentlife.swinburne.edu.au/Clubs/Entrepreneurship/Groups"
            }
            target="_blank"
          >
            <Button
              bg={textColor}
              _hover={{}}
              _active={{}}
              color={navBtnColor}
              // onClick={() =>
              //   (window.href =
              //     "https://studentlife.swinburne.edu.au/Clubs/Entrepreneurship/Groups")
              //   }
            >
              Become a member
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Drawer placement={"right"} size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
