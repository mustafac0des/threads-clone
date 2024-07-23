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
        icon={faHeart}
        width={["10px", "12px", "15px"]}
        color={props.liked ? "#FF0000" : ""}
      />
    </Button>
  );
};

const Comment = (props) => {
  return (
    <Button sx={styles.button} onClick={props.comment}>
      <FontAwesomeIcon width={["10px", "12px", "15px"]} icon={faComment} />
    </Button>
  );
};

const Share = (props) => {
  return (
    <Button sx={styles.button} onClick={props.share}>
      <FontAwesomeIcon width={["10px", "12px", "15px"]} icon={faShare} />
    </Button>
  );
};

const Repost = (props) => {
  return (
    <Button sx={styles.button} onClick={props.repost}>
      <FontAwesomeIcon width={["10px", "12px", "15px"]} icon={faPlus} />
    </Button>
  );
};

export const Actions = (props) => {
  const [liked, setLiked] = useState(false);
  return (
    <Flex ml={"-15px"} gap={1}>
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
    h: "30px",
    mt: ["3px", "4px", "5px"],
    borderRadius: "full",
    bg: "unset",
  },
};
