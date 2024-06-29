/* eslint-disable react/prop-types */
import { Box, Divider, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Actions } from "./Actions";

const Comment = (props) => {
  return (
    <>
      <Flex mx={2} gap={3} my={3}>
        <Box>
          <Image borderRadius={"100%"} w={"40px"} src={props.image} />
        </Box>
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
    </>
  );
};

export default Comment;
