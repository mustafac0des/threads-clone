/* eslint-disable react/prop-types */
import { Button, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const ActionButton = (props) => {
  return (
    <Button
      w={0}
      mt={1.5}
      borderRadius={"full"}
      bg={"unset"}
      // onClick={props.onClick}
    >
      <FontAwesomeIcon icon={props.icon} />
    </Button>
  );
};

const Actions = () => {
  return (
    <Stack direction={"row"}>
      <ActionButton icon={faHeart} />
      <ActionButton icon={faComment} />
      <ActionButton icon={faShare} />
      <ActionButton icon={faPlus} />
    </Stack>
  );
};

export default Actions;
