/* eslint-disable react/prop-types */
import {
  Button,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";

import Icon from "./Icon"; // Import the custom Icon component

const More = (props) => {
  return (
    <Menu>
      <Button
        as={MenuButton}
        size={["xs", "sm"]}
        h={5}
        p={0}
        bg={"unset"}
        borderRadius={"full"}
      >
        <Icon name="ellipsis" /> {/* Replace FontAwesomeIcon with Icon */}
      </Button>
      <MenuList border={"1px solid #616161"} className={"lightBlack"}>
        <MenuItem
          bg={"unset"}
          _hover={{ fontWeight: "600" }}
          justifyContent={"space-between"}
        >
          <Text>{props.isSaved ? "Unsave" : "Save"}</Text>
          <Icon name="bookmark" /> {/* Replace FontAwesomeIcon with Icon */}
        </MenuItem>
        <MenuItem
          bg={"unset"}
          _hover={{ fontWeight: "600" }}
          justifyContent={"space-between"}
        >
          <Text>Delete</Text>
          <Icon name="trash" /> {/* Replace FontAwesomeIcon with Icon */}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default More;
