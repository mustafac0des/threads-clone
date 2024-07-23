/* eslint-disable react/prop-types */
import {
  Box,
  Image,
  Stack,
  Text,
  Button,
  Divider,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  faBookmark,
  faEllipsis,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Actions } from "./Actions";

const More = (props) => {
  const isLoggedIn = true;

  return (
    <Menu>
      <Button as={MenuButton} h={5} p={0} bg={"unset"} borderRadius={"full"}>
        <FontAwesomeIcon width={["10px", "12px", "15px"]} icon={faEllipsis} />
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

const UserPost = (props) => {
  return (
    <Box w={"full"} mt={[3, 4, 5]}>
      <Stack direction={"row"} spacing={[1, 2, 3]}>
        <Box w={["32px", "35px", "38px"]} className={"icon"}>
          <Image
            src={
              props.profilePicture ||
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            border={"1px solid #999999"}
            borderRadius={"full"}
          />
        </Box>
        <Box w={"full"}>
          <Stack direction={"column"}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack
                direction={"row"}
                fontSize={["12px", "13px", "14px", "15px"]}
              >
                <Text fontWeight={600}>{props.name || "404"}</Text>
                <Text fontWeight={200} className={"icon"}>
                  {props.uploadTime || "0s"}
                </Text>
              </Stack>
              <More />
            </Stack>
            <Box mt={-2} fontSize={13}>
              <Text fontSize={["10px", "11px", "12px", "13px"]}>
                {props.text || "404"}
              </Text>
              {props.image ? (
                <Image
                  src={props.image}
                  maxH={["200px", "250px", "300px"]}
                  mt={2}
                  objectFit={"cover"}
                  border={"1px solid #999999"}
                  borderRadius={5}
                />
              ) : null}
              <Actions />
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Divider mt={2} />
    </Box>
  );
};

export default UserPost;
