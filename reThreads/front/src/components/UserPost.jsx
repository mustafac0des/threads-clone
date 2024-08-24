/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Avatar, Box, Divider, Image, Stack, Text } from "@chakra-ui/react";

import Actions from "./Actions";

const UserPost = (props) => {
  return (
    <Box w={"full"} mt={[3, 4, 5]}>
      <Stack direction={"row"} spacing={[1, 2, 3]}>
        <Avatar src={props.post.postedBy.picture} size={["xs", "sm"]} />
        <Box w={"full"}>
          <Stack direction={"column"} mt={-2}>
            <Link
              to={`/${props.post.postedBy.username}/post/${props.post._id}`}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"} fontSize={[12, 13, 14, 15]}>
                  <Text fontWeight={600}>{props.post.postedBy.username}</Text>
                  <Text fontWeight={400} color={"#616161"}>
                    {props.post.postedAt}
                  </Text>
                </Stack>
              </Stack>
              <Box fontSize={13}>
                <Text fontSize={[10, 11, 12, 13]}>{props.post.text}</Text>
                {props.post.image ? (
                  <Image
                    src={props.post.image}
                    maxH={[200, 225, 275]}
                    mt={2}
                    objectFit={"cover"}
                    border={"1px solid #616161"}
                    borderRadius={10}
                  />
                ) : null}
              </Box>
            </Link>
            <Actions userId={props.userId} post={props.post} />
          </Stack>
        </Box>
      </Stack>
      <Divider mt={2} />
    </Box>
  );
};

export default UserPost;
