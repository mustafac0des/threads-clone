/* eslint-disable react/prop-types */
import { Box, Divider, Avatar, Stack, Text } from "@chakra-ui/react";

const Comment = (props) => {
  console.log(props.replyBy);
  return (
    <Box w={"full"} mt={[3, 4, 5]}>
      <Stack direction={"row"} spacing={[1, 2, 3]}>
        <Avatar src={props.replyBy.userId.picture} size={["xs", "sm"]} />
        <Box w={"full"}>
          <Stack direction={"column"}>
            <Stack direction={"row"} mt={-1} justifyContent={"space-between"}>
              <Stack direction={"row"} fontSize={[12, 13, 14, 15]}>
                <Text fontWeight={600}>{props.replyBy.userId.username}</Text>
                <Text fontWeight={200} color={"#616161"}></Text>
              </Stack>
            </Stack>
            <Text mt={-1} fontSize={[10, 11, 12, 13]}>
              {props.replyBy.text}
            </Text>
            <Box ml={-3} mt={-5} fontSize={13}></Box>
          </Stack>
        </Box>
      </Stack>
      <Divider mt={5} />
    </Box>
  );
};

export default Comment;
