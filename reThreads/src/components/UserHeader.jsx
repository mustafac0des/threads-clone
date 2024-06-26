import { Button, Flex, Text, Box, Image, Link } from "@chakra-ui/react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserHeader = () => {
  const Instagram = () => (
    <Button
      as="a"
      href="https://www.instagram.com/must_f4/"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.svgLogo}
    >
      <FontAwesomeIcon size={"xl"} icon={faInstagram} />
    </Button>
  );

  const More = () => (
    <Button style={styles.svgLogo}>
      <FontAwesomeIcon size={"xl"} icon={faEllipsis} />
    </Button>
  );

  return (
    <Flex flexDirection={"column"} mt={3}>
      <Flex justifyContent={"space-between"}>
        <Flex flexDirection={"column"} mt={2}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Mustafa AmanUllah
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text>mustafa</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              p={1}
              borderRadius={"xl"}
              color={"gray.light"}
            >
              threads.net
            </Text>
          </Flex>
        </Flex>
        <Box>
          <Image
            src="https://yt3.googleusercontent.com/gtKyyf28tXVtyjap_Oy8GhJoPh9KewrudUjjdDSEgSu7BI0fDsTwGsqlu_VekNt0xUqgeX0YLg=s176-c-k-c0x00ffffff-no-rj"
            width="100px"
            borderRadius="100%"
          />
        </Box>
      </Flex>
      <Text maxW={"md"}>
        Student of software engineering and acing in MERN Stack before my 6th
        Semester.
      </Text>
      <Flex
        mt={5}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex fontSize={"sm"} color={"gray.light"}>
          <Text>1,234 followers</Text>
          <Text>・</Text>
          <Link to="https://youtube.com/@must_f4?si=-iOSHnzYrTKbFAkk">
            https://youtube.com/@must_f4?si=-iOSHnzYrTKbFAkk
          </Link>
        </Flex>
        <Box>
          <Instagram />
          <More />
        </Box>
      </Flex>
      <Flex
        mt={5}
        pb={2}
        alignItems={"center"}
        justifyContent={"space-around"}
        flexDirection={"row"}
        fontWeight={"bold"}
        borderBottom={"1.5px solid gray"}
        color={"gray.light"}
      >
        <Flex>
          <Text color={"#FFFFFF"}>Threads</Text>
        </Flex>
        <Flex>
          <Text>Replies</Text>
        </Flex>
        <Flex>
          <Text>Reposts</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

const styles = {
  svgLogo: {
    width: "30px",
    height: "auto",
    backgroundColor: "transparent",
    fill: "#FFFFFF",
  },
};

export default UserHeader;
