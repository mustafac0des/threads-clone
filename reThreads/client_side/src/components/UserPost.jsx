/* eslint-disable react/prop-types */
import {
  Box,
  Image,
  Stack,
  Text,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Actions } from "./Actions";

const UserPost = (props) => {
  return (
    <Box overflow={"hidden"}>
      <Stack direction={"row"} spacing={3} alignItems={"flex-start"}>
        <Box w={"45px"} className={"icon"}>
          <Image
            src={
              props.profilePicture ||
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            border={"1px solid #999999"}
            borderRadius={"full"}
          />
        </Box>
        <Stack w={"full"} direction={"column"}>
          <Flex justifyContent={"space-between"}>
            <Stack direction={"row"}>
              <Text fontWeight={600}>{props.name || "404"}</Text>
              <Text fontWeight={200} className={"icon"}>
                {props.uploadTime || "0s"}
              </Text>
            </Stack>
            <Button h={7} right={0} bg={"unset"} borderRadius={"full"}>
              <FontAwesomeIcon icon={faEllipsis} />
            </Button>
          </Flex>
          <Box mt={-2} fontSize={13}>
            <Text>{props.text || "404"}</Text>
            {props.image ? (
              <Image
                src={props.image}
                maxH={300}
                mt={2}
                objectFit={"cover"}
                border={"1px solid #999999"}
                borderRadius={5}
              />
            ) : null}
            <Actions />
          </Box>
        </Stack>
      </Stack>
      <Divider my={2} />
    </Box>
  );
};

export default UserPost;
