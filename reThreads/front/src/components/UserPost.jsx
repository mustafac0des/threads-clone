/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Avatar, Box, Divider, Image, Stack, Text } from "@chakra-ui/react";

import Actions from "./Actions";
import More from "./More";

const UserPost = (props) => {
  return (
    <Box w={"full"} mt={[3, 4, 5]}>
      <Stack direction={"row"} spacing={[1, 2, 3]}>
        <Avatar src={props.post.postedBy.picture} size={["xs", "sm"]} />
        <Box w={"full"}>
          <Stack direction={"column"} mt={-3}>
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
                  <Text fontWeight={200} color={"#616161"}>
                    {props.post.createdAt}
                  </Text>
                </Stack>
                {props.post.postedBy.username && (
                  <More
                    postId={props.post._id}
                    postedBy={props.post.postedBy}
                  />
                )}
              </Stack>
              <Box fontSize={13}>
                <Text fontSize={[10, 11, 12, 13]}>{props.post.text}</Text>
                {props.post.image ? (
                  <Image
                    src={props.image}
                    maxH={[200, 225, 275]}
                    mt={2}
                    objectFit={"cover"}
                    border={"1px solid #616161"}
                    borderRadius={10}
                  />
                ) : null}
              </Box>
            </Link>
            <Actions post={props.post} />
          </Stack>
        </Box>
      </Stack>
      <Divider mt={2} />
    </Box>
  );
};

export default UserPost;
