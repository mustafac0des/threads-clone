/* eslint-disable react/prop-types */
import { Box, Image, Stack, Text, Divider, Avatar } from "@chakra-ui/react";

import Actions from "./Actions";
import More from "./More";

const UserPost = (props) => {
  return (
    <Box w={"full"} mt={[3, 4, 5]}>
      <Stack direction={"row"} spacing={[1, 2, 3]}>
        <Avatar size={["xs", "sm"]} />
        <Box w={"full"}>
          <Stack direction={"column"}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} fontSize={[12, 13, 14, 15]}>
                <Text fontWeight={600}>{props.name}</Text>
                <Text fontWeight={200} color={"#616161"}>
                  {props.uploadTime}
                </Text>
              </Stack>
              {true && <More />}
            </Stack>
            <Box mt={-2} fontSize={13}>
              <Text fontSize={[10, 11, 12, 13]}>{props.text}</Text>
              {props.image ? (
                <Image
                  src={props.image}
                  maxH={[200, 225, 275]}
                  mt={2}
                  objectFit={"cover"}
                  border={"1px solid #616161"}
                  borderRadius={10}
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
