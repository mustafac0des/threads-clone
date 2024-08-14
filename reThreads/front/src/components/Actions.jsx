/* eslint-disable react/prop-types */
import { Button, Stack } from "@chakra-ui/react";
import Icon from "./Icon";

const ActionButton = (props) => {
  return (
    <Button
      w={0}
      mt={1.5}
      borderRadius={"full"}
      bg={"unset"}
      // onClick={props.onClick}
    >
      <Icon name={props.icon} />
    </Button>
  );
};

const Actions = () => {
  return (
    <Stack direction={"row"}>
      <ActionButton icon={"heart"} />
      <ActionButton icon={"comment"} />
      <ActionButton icon={"share"} />
      <ActionButton icon={"plus"} />
    </Stack>
  );
};

export default Actions;
