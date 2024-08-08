/* eslint-disable react/prop-types */
import { Box, Divider, Avatar, Stack, Text } from "@chakra-ui/react";
import Actions from "./Actions";

import More from "./More";

const Comment = (props) => {
  return (
    <Box w={"full"} mt={[3, 4, 5]}>
      <Stack direction={"row"} spacing={[1, 2, 3]}>
        <Avatar size={"sm"} />
        <Box w={"full"}>
          <Stack direction={"column"}>
            <Stack direction={"row"} mt={-1} justifyContent={"space-between"}>
              <Stack direction={"row"} fontSize={[12, 13, 14, 15]}>
                <Text fontWeight={600}>mustafa</Text>
                <Text fontWeight={200} color={"#616161"}>
                  {props.uploadTime}
                </Text>
              </Stack>
              {true && <More />}
            </Stack>
            <Text mt={-2} fontSize={[10, 11, 12, 13]}>
              hello
            </Text>
            <Box ml={-3} mt={-5} fontSize={13}>
              <Actions />
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Divider mt={2} />
    </Box>
  );
};

export default Comment;
