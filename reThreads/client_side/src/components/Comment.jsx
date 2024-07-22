/* eslint-disable react/prop-types */
import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Actions } from "./Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faBookmark,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const More = (props) => {
  const isLoggedIn = true;

  return (
    <Menu>
      <Button
        as={MenuButton}
        h={7}
        bg={"unset"}
        transform={"translateX(100%)"}
        borderRadius={"full"}
      >
        <FontAwesomeIcon icon={faEllipsis} />
      </Button>
      <MenuList className={"background"}>
        <MenuItem
          bg={"unset"}
          _hover={{ fontWeight: "600" }}
          justifyContent={"space-between"}
        >
          <Text>{props.isSaved ? "Unsave" : "Save"}</Text>
          <FontAwesomeIcon icon={props.isSaved ? faBookmark : faBookmark} />
        </MenuItem>
        {isLoggedIn && (
          <MenuItem
            bg={"unset"}
            _hover={{ fontWeight: "600" }}
            justifyContent={"space-between"}
          >
            <Text>Delete</Text>
            <FontAwesomeIcon icon={faTrash} />
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

const Comment = (props) => {
  return (
    <Box minW={"full"}>
      <Stack direction={"rows"} spacing={2} my={3}>
        <Box>
          <Image
            borderRadius={"full"}
            w={"37px"}
            src={
              props.profilePicture ||
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
          />
        </Box>
        <Stack direction={"column"} spacing={0} fontSize={14}>
          <Text fontWeight={"600"}>{props.name || "404"}</Text>
          <More />
          <Text>{props.text || "404: Comment"}</Text>
          <Actions />
        </Stack>
      </Stack>
      <Divider />
    </Box>
  );
};

export default Comment;

const useless = (props) => {
  <>
    <Flex mx={2} gap={3} my={3}>
      <Flex flexDirection={"column"}>
        <HStack>
          <Text fontWeight={"bold"}>{props.commenterName}</Text>
          <Text color={"gray.light"}>{props.commentedOn}</Text>
        </HStack>
        <Text>{props.comment}</Text>
        <Actions likes={props.likes} />
      </Flex>
    </Flex>
    <Divider mt={2} />
  </>;
};
