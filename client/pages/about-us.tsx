import AnimateOnVisible from "@/components/AnimateOnVisible";
import Footer from "@/components/Footer";
import NotFopNavbar from "@/components/AltNavbar";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { brandColor } from "@/helpers/constants";

const AboutUs = () => {
  return (
    <>
      <NotFopNavbar />
      <Center flexDir={"column"}>
        <Center w="full">
          <Image src="./swin-bg-1.jpg" w="full" h="40vh" objectFit={"cover"} />
          <Text
            pos={"absolute"}
            fontWeight={"bold"}
            fontSize={"xx-large"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"white"}
            textAlign={"center"}
          >
            About Us
          </Text>
        </Center>
        <Box px="32" my="10">
          <Text fontSize={"2xl"} textAlign={"left"} color={brandColor}>
            A team of driven Swinburne University students, specializing in
            Business and Entrepreneurship, delivers insightful analysis and
            joint strategies, actively shaping the landscape of startup
            innovation.
          </Text>
          <Flex gap="10" mt="10">
            {[
              "Fueled by the innovative spirit of Swinburne University's entrepreneurial and business initiatives, our community aims to redefine traditional business ventures. We blend progressive academic concepts with real-world startup experiences, offering insightful strategies and dynamic frameworks that empower our members to navigate the challenges of today's entrepreneurial ecosystems.",
              `At the heart of our mission is the fostering of pioneering leadership,
  developed through rigorous entrepreneurial learning and hands-on projects.
  We advocate for a forward-thinking approach to business development, anticipating
  industry trends and utilizing disruptive technologies to achieve
  groundbreaking results.`,
            ].map((i) => (
              <Text flex="1" fontSize={"sm"} opacity="0.8">
                {i}
              </Text>
            ))}
          </Flex>
        </Box>
        {/* <Flex
          py="20"
          // px="12"
          gap="20"
          w="80%"
          justify={"space-around"}
          align={"center"}
        >
          <Box>
            <Text
              fontWeight={"bold"}
              fontStyle={"italic"}
              fontSize={"xx-large"}
            >
              From the Top
            </Text>
            <Text pt="3" fontSize={""}>
              “Are you ready to turn your ideas into reality? Our
              entrepreneurship club is the place to be. Here, you'll find a
              supportive community, mentorship from industry experts, and the
              resources you need to succeed. Whether you're just starting out or
              looking to take your business to the next level, we've got you
              covered. Join us and discover your entrepreneurial potential.”
            </Text>
            <Text
              textAlign={"right"}
              pt="1"
              fontStyle={"italic"}
              fontSize={"medium"}
            >
              ~ Sophie Watson
            </Text>
          </Box>
          <Image rounded={"full"} src="sophie_pres.jpg" height={"30vh"} />
        </Flex> */}
        <AnimateOnVisible>
          <Box px="32" pt="10">
            <Center gap="2" alignItems={"center"}>
              {[
                {
                  image: "./group-icon.svg",
                  heading: "Leadership",
                  text: "Take on leadership roles within the club to develop your management and decision-making skills.",
                },
                {
                  image: "./career-growth.svg",
                  heading: "Career Growth",
                  text: "Connect with industry professionals and potential employers at our events and workshops.",
                },
                {
                  image: "./partnership.svg",
                  heading: "Partnerships and Exposure",
                  text: "Showcase your projects and achievements on our club's social media platforms, gaining valuable exposure.",
                },
                {
                  image: "./peer-growth.svg",
                  heading: "Peer Support and Community",
                  text: "Find a group of peers who understand your entrepreneurial journey and offer encouragement and motivation.",
                },
              ].map((i) => (
                <Flex
                  flexDir={"column"}
                  alignItems={"center"}
                  justify={"center"}
                  textAlign={"center"}
                >
                  <Image w="20" h="20" src={i.image} />
                  <Box>
                    <Text py="2" fontWeight={"bold"} textAlign={"center"}>
                      {i.heading}
                    </Text>
                    <Text textAlign={"center"}>{i.text}</Text>
                  </Box>
                </Flex>
              ))}
            </Center>
          </Box>
        </AnimateOnVisible>
        <Flex mt="32" w="80%" gap="10">
          <Box flex="1">
            <AnimateOnVisible>
              <Text
                fontWeight={"bold"}
                fontStyle={"italic"}
                fontSize={"xx-large"}
              >
                About Swinburne
              </Text>
              <Text pt="3" fontSize={""}>
                Located in the heart of Melbourne, Swinburne University of
                Technology offers a dynamic and engaging learning environment.
                Known for its strong focus on industry collaboration, Swinburne
                provides students with practical experience and real-world
                opportunities. The university's entrepreneurship club is
                particularly noteworthy, fostering a culture of innovation and
                providing students with the resources and support to turn their
                ideas into reality. With its diverse range of courses,
                state-of-the-art facilities, and committed faculty, Swinburne is
                an excellent choice for students seeking a fulfilling and
                rewarding academic experience.
              </Text>
            </AnimateOnVisible>
          </Box>
          <Box flex="1" w="20vh">
            <AnimateOnVisible>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="500"
                    height="350"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=swinburne university hawthorn&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    // frameborder="0"
                    scrolling="no"
                    // marginheight="0"
                    // marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </AnimateOnVisible>
          </Box>
        </Flex>
      </Center>
      <Footer />
    </>
  );
};

export default AboutUs;
