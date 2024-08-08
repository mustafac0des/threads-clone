/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Divider,
  Container,
  Image,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";

import Actions from "../components/Actions";
import Comment from "../components/Comment";
import More from "../components/More";

const PostPage = (props) => {
  return (
    <Flex alignItems={"center"} flexDirection={"column"} className={"text"}>
      <Container
        minW={["full", 480, 576, 720]}
        minH={"98vh"}
        my={[2, 3]}
        px={[5]}
        borderRadius={25}
        border={"1px solid #616161"}
        className={"lightBlack"}
      >
        <Box w={"full"} mt={[3, 4, 5]}>
          <Stack direction={"row"} spacing={[1, 2, 3]}>
            <Avatar size={"md"} />
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
          <Divider />
          <Text m={2} color={"#616161"}>
            Replies
          </Text>
          <Divider />
        </Box>
        <Comment />
      </Container>
    </Flex>
  );
};

export default PostPage;
