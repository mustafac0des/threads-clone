/* eslint-disable react/prop-types */
import { Flex, Button, Text, Image, Box } from "@chakra-ui/react";
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
      <FontAwesomeIcon size={"lg"} icon={faHeart} style={styles.faIcon} />

      <Text fontSize={"xs"} ml={2}>
        {props.likes}
      </Text>
    </Button>
  );
};

const Comment = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"lg"} icon={faComment} style={styles.faIcon} />
    </Button>
  );
};

const Share = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"lg"} icon={faShare} style={styles.faIcon} />
    </Button>
  );
};

const Repost = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"lg"} icon={faPlus} style={styles.faIcon} />
    </Button>
  );
};

const UserPost = (props) => {
  return (
    <Flex mt={5} mx={1} gap={2}>
      <Box>
        <Image src={props.image} w={"50px"} borderRadius="100%" mr={4} />
      </Box>
      <Flex width={"full"} flexDirection={"column"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={1} alignItems={"center"}>
            <Text fontWeight={"bold"}>{props.name}</Text>
            <Text color={"gray.light"}>{props.postedOn}</Text>
          </Flex>
          <More />
        </Flex>
        <Box mt={1}>
          <Text>{props.postDescription}</Text>
          {props.postImage && (
            <Image
              src={props.postImage}
              mt={2}
              borderRadius={"xl"}
              maxH={"sm"}
            />
          )}
          <Flex gap={2} mt={2}>
            <Like likes={props.likes} />
            <Comment />
            <Share />
            <Repost />
          </Flex>
        </Box>
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

  faIcon: (colorMode) => ({
    color: colorMode === "dark" ? "#FFFFFF" : "#000000",
  }),
};

export default UserPost;
