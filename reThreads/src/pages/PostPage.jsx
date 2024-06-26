/* eslint-disable react/prop-types */
import { Flex, Button, Text, Image, Box, Divider } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEllipsis,
  faHeart,
  faPlus,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const More = () => (
  <Button h={0} color={"gray.light"}>
    <FontAwesomeIcon size={"sm"} icon={faEllipsis} />
  </Button>
);

const Like = (props) => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"lg"} icon={faHeart} />

      <Text fontSize={"xs"} ml={2}>
        {props.likes}
      </Text>
    </Button>
  );
};

const Comment = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"lg"} icon={faComment} />
    </Button>
  );
};

const Share = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"lg"} icon={faShare} />
    </Button>
  );
};

const Repost = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"lg"} icon={faPlus} />
    </Button>
  );
};

const PostPage = () => {
  return (
    <Flex
      w={"2xl"}
      mt={5}
      mx={1}
      p={5}
      borderRadius={"25px"}
      border={"2px solid"}
      borderColor={"gray.light"}
      gap={2}
      bg={"#181818"}
      flexDirection={"column"}
    >
      <Flex width={"full"} flexDirection={"column"} gap={5}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={1} alignItems={"center"}>
            <Box>
              <Image
                src={
                  "https://yt3.ggpht.com/gtKyyf28tXVtyjap_Oy8GhJoPh9KewrudUjjdDSEgSu7BI0fDsTwGsqlu_VekNt0xUqgeX0YLg=s88-c-k-c0x00ffffff-no-rj"
                }
                w={"40px"}
                borderRadius={"100%"}
                mr={2}
                border={"1px solid"}
                borderColor={"gray.light"}
              />
            </Box>
            <Text fontWeight={"bold"}>mustafa</Text>
            <Text color={"gray.light"}>1d</Text>
          </Flex>
          <More />
        </Flex>
        <Box>
          <Text ml={1}>Delicious Food!</Text>
          <Image
            src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            mt={2}
            borderRadius={"xl"}
            maxH={"sm"}
            border={"1px solid"}
            borderColor={"gray.light"}
          />
          <Flex gap={2} mt={2} ml={2}>
            <Like likes={1} />
            <Comment />
            <Share />
            <Repost />
          </Flex>
        </Box>
        <Divider />
        <Text fontWeight={"bold"} ml={1}>
          Replies
        </Text>
        <Divider />
      </Flex>
    </Flex>
  );
};

const styles = {
  button: {
    marginTop: "5px",
    width: "35px",
    height: "30px",
    borderRadius: "10px",
    backgroundColor: "transparent",
  },
};

export default PostPage;
