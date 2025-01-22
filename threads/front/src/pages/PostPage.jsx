/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Center,
  Divider,
  Container,
  Image,
  Flex,
  Stack,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";

import Actions from "../components/Actions";
import Comment from "../components/Comment";

import { useState, useEffect } from "react";
import useCustomToast from "../hooks/useCustomToast";

const PostPage = (props) => {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const showToast = useCustomToast();

  const postId = window.location.pathname.split("/").pop();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${postId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      setIsLoading(false);
      setPostData(data);
    };

    return () => fetchPost();
  }, []);

  const postReply = async () => {
    if (text === "") {
      return showToast("Write something!", "info");
    }
    const res = await fetch(`/api/posts/reply/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    if (data.status === 200) {
      return showToast(data.message, "success");
    } else {
      return showToast(data.message, "error");
    }
  };

  if (isLoading) {
    return <Box color={"#616161"}>Loading</Box>;
  }

  return (
    <Flex alignItems={"center"} flexDirection={"column"} className={"text"}>
      <Container
        minW={[320, 480, 576, 720]}
        minH={"102vh"}
        my={[2, 3]}
        px={[3, 4, 5]}
        borderRadius={[15, 17, 25]}
        border={"1px solid #616161"}
        className={"lightBlack"}
      >
        <Box w={"full"} mt={[3, 4, 5]}>
          <Stack direction={"row"} spacing={[1, 2, 3]} mb={2}>
            <Avatar src={postData.postedBy.picture} size={"md"} />
            <Box w={"full"} mt={-1}>
              <Stack direction={"column"}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"} fontSize={[14, 15, 16, 17]}>
                    <Text fontWeight={600}>{postData.postedBy.username}</Text>
                    <Text fontWeight={200} color={"#616161"}>
                      {postData.createdAt}
                    </Text>
                  </Stack>
                </Stack>
                <Box mt={-2} fontSize={13}>
                  <Text fontSize={[12, 13, 14, 15]}>{postData.text}</Text>
                  {postData.image ? (
                    <Image
                      src={postData.image}
                      maxH={[200, 225, 275]}
                      mt={2}
                      objectFit={"cover"}
                      border={"1px solid #616161"}
                      borderRadius={10}
                    />
                  ) : null}
                </Box>
                <Actions userId={props.user._id} post={postData} />
              </Stack>
            </Box>
          </Stack>
          <Box my={2} display={"flex"} gap={1}>
            <Input
              type={"text"}
              flex={9}
              placeholder={"What do you think about this?"}
              fontSize={12}
              border={"1px solid #616161"}
              borderRadius={[5, 7, 10]}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              flex={1}
              fontSize={12}
              border={"1px solid #616161"}
              borderRadius={[5, 7, 10]}
              onClick={postReply}
            >
              Reply
            </Button>
          </Box>
          <Divider />
          <Text m={2} fontSize={[12, 14, 16]} color={"#616161"}>
            Replies
          </Text>
          <Divider />
        </Box>
        {postData.replies.length > 0 ? (
          <>
            {postData.replies.map((reply) => (
              <Comment
                key={reply._id}
                userId={props.user._id}
                postId={postId}
                replyBy={reply}
              />
            ))}
          </>
        ) : (
          <Center m={5} color={"#616161"}>
            Be The First to Reply!
          </Center>
        )}
      </Container>
    </Flex>
  );
};

export default PostPage;
