import { Button, Flex, HStack, Text, Box, Image, Link } from "@chakra-ui/react";
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
      <FontAwesomeIcon size={"2x"} icon={faInstagram} />
    </Button>
  );

  const More = () => (
    <Button style={styles.svgLogo}>
      <FontAwesomeIcon size="2x" icon={faEllipsis} />
    </Button>
  );

  return (
    <Flex flexDirection={"column"}>
      <Flex justifyContent={"space-between"}>
        <Flex flexDirection={"column"}>
          <Text>Mustafa AmanUllah</Text>
          <HStack>
            <Text>mustafa</Text>
            <Text>threads.net</Text>
          </HStack>
        </Flex>
        <Box>
          <Image
            src="https://yt3.googleusercontent.com/gtKyyf28tXVtyjap_Oy8GhJoPh9KewrudUjjdDSEgSu7BI0fDsTwGsqlu_VekNt0xUqgeX0YLg=s176-c-k-c0x00ffffff-no-rj"
            width="100px"
            borderRadius="100%"
          />
        </Box>
      </Flex>
      <Text>
        Student of software engineering and acing in MERN Stack before my 6th
        Semester.
      </Text>
      <Flex
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex>
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
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text>Threads</Text>
        <Text>Replies</Text>
        <Text>Reposts</Text>
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
