/* eslint-disable react/prop-types */
import {
  Button,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";

import Icon from "./Icon";
import useCustomToast from "../hooks/useCustomToast";
import userAtom from "../atoms/userAtom";
import { useRecoilValue } from "recoil";

const More = (props) => {
  const user = useRecoilValue(userAtom);
  const showToast = useCustomToast();

  const postDelete = async () => {
    showToast("Deleting...", "info");
    const res = await fetch(`/api/posts/${props.postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.status === 200) {
      return showToast(data.message, "success");
    } else {
      return showToast(data.message, "error");
    }
  };

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
        <Icon name={"ellipsis"} />
      </Button>
      <MenuList border={"1px solid #616161"} className={"lightBlack"}>
        <MenuItem
          bg={"unset"}
          _hover={{ fontWeight: "600" }}
          justifyContent={"space-between"}
        >
          <Text>{props.isSaved ? "Unsave" : "Save"}</Text>
        </MenuItem>
        {props.postedBy.toString() === user._id.toString() ? (
          <MenuItem
            bg={"unset"}
            _hover={{ fontWeight: "600" }}
            justifyContent={"space-between"}
            onClick={postDelete}
          >
            <Text>Delete</Text>
          </MenuItem>
        ) : null}
      </MenuList>
    </Menu>
  );
};

export default More;
