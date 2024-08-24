/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { Box, Center, Container, Flex, Divider } from "@chakra-ui/react";

import UserPost from "../components/UserPost";
import FeedMenu from "../components/FeedMenu";
import CreatePost from "../components/CreatePost";

const FeedPage = (props) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    const res = await fetch(`/api/posts/feed/${props.user._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setIsLoading(false);
    setPost(data);
  };

  useEffect(() => {
    return () => fetchPosts();
  }, []);

  if (isLoading) {
    return <Box color={"#616161"}>Loading</Box>;
  }

  return (
    <Flex alignItems={"center"} flexDirection={"column"} className={"text"}>
      <FeedMenu user={props.user} />
      <Container
        minW={[320, 480, 576, 720]}
        minH={"100vh"}
        borderRadius={[15, 17, 25]}
        border={"1px solid #616161"}
        className={"lightBlack"}
      >
        <CreatePost user={props.user} />
        <Divider />
        <Box
          mx={[1, 2, 3]}
          maxH={"88vh"}
          overflowY={"scroll"}
          style={{ scrollbarWidth: "none" }}
        >
          {post != 0 ? (
            <>
              {post.map((post) => (
                <UserPost key={post._id} userId={props.user._id} post={post} />
              ))}
            </>
          ) : (
            <Center m={5} color={"#616161"}>
              No Post Found!
            </Center>
          )}
        </Box>
      </Container>
    </Flex>
  );
};

export default FeedPage;
