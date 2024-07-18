/* eslint-disable react/prop-types */
import { Flex, Button } from "@chakra-ui/react";
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
    <Button sx={styles.button} onClick={props.setLiked} textAlign={"center"}>
      <FontAwesomeIcon
        size={"md"}
        icon={faHeart}
        color={props.liked ? "#FF0000" : ""}
      />
    </Button>
  );
};

const Comment = (props) => {
  return (
    <Button sx={styles.button} onClick={props.comment}>
      <FontAwesomeIcon size={"md"} icon={faComment} />
    </Button>
  );
};

const Share = (props) => {
  return (
    <Button sx={styles.button} onClick={props.share}>
      <FontAwesomeIcon size={"md"} icon={faShare} />
    </Button>
  );
};

const Repost = (props) => {
  return (
    <Button sx={styles.button} onClick={props.repost}>
      <FontAwesomeIcon size={"md"} icon={faPlus} />
    </Button>
  );
};

export const Actions = (props) => {
  const [liked, setLiked] = useState(false);
  return (
    <Flex ml={-2.5} gap={1}>
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
    w: "4px",
    h: "4px",
    mt: "5px",
    height: "30px",
    borderRadius: "full",
    bg: "transparent",
  },
};
