/* eslint-disable react/prop-types */
import {
  Button,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faEllipsis,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const More = (props) => {
  return (
    <Menu>
      <Button as={MenuButton} h={5} p={0} bg={"unset"} borderRadius={"full"}>
        <FontAwesomeIcon width={[10, 12, 15]} icon={faEllipsis} />
      </Button>
      <MenuList border={"1px solid #616161"} className={"lightBlack"}>
        <MenuItem
          bg={"unset"}
          _hover={{ fontWeight: "600" }}
          justifyContent={"space-between"}
        >
          <Text>{props.isSaved ? "Unsave" : "Save"}</Text>
          <FontAwesomeIcon icon={props.isSaved ? faBookmark : faBookmark} />
        </MenuItem>
        <MenuItem
          bg={"unset"}
          _hover={{ fontWeight: "600" }}
          justifyContent={"space-between"}
        >
          <Text>Delete</Text>
          <FontAwesomeIcon icon={faTrash} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default More;
