/* eslint-disable react/prop-types */
import { Flex, Button, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Like = (props) => {
  return (
    <Button
      sx={styles.button}
      onClick={props.setLiked}
      textAlign={"center"}
      pl={2}
    >
      <FontAwesomeIcon
        size={"md"}
        icon={faHeart}
        color={props.liked ? "#FF0000" : ""}
      />

      {props.likes > 0 && (
        <Text fontSize={"xs"} ml={1}>
          {props.likes}
        </Text>
      )}
    </Button>
  );
};

const Comment = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"md"} icon={faComment} />
    </Button>
  );
};

const Share = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"md"} icon={faShare} />
    </Button>
  );
};

const Repost = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"md"} icon={faPlus} />
    </Button>
  );
};

export const Actions = (props) => {
  const [liked, setLiked] = useState(false);
  return (
    <Flex gap={1}>
      <Like
        likes={props.likes + (liked ? 1 : 0)}
        setLiked={() => setLiked(!liked)}
        liked={liked}
      />
      <Comment />
      <Share />
      <Repost />
    </Flex>
  );
};

const styles = {
  button: {
    marginTop: "5px",
    width: "auto",
    height: "30px",
    borderRadius: "10px",
    backgroundColor: "transparent",
  },
};
