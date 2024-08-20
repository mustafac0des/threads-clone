/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { Box, Container, Flex, Divider } from "@chakra-ui/react";

import UserPost from "../components/UserPost";
import FeedMenu from "../components/FeedMenu";
import CreatePost from "../components/CreatePost";

const FeedPage = (props) => {
  const user = props.user;

  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/posts/feed/${user._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setIsLoading(false);
      setPostData(data);
    };

    return () => fetchPosts();
  }, [user._id]);

  if (isLoading) {
    return <Box color={"#616161"}>Loading</Box>;
  }

  return (
    <Flex alignItems={"center"} flexDirection={"column"} className={"text"}>
      <FeedMenu user={user} />
      <Container
        minW={[320, 480, 576, 720]}
        minH={"100vh"}
        borderRadius={[15, 17, 25]}
        border={"1px solid #616161"}
        className={"lightBlack"}
      >
        <CreatePost user={user} />
        <Divider />
        <Box
          mx={[1, 2, 3]}
          maxH={"88vh"}
          overflowY={"scroll"}
          style={{ scrollbarWidth: "none" }}
        >
          {!postData == [] ? (
            <>
              {postData.map((post) => (
                <UserPost key={post._id} post={post} />
              ))}
            </>
          ) : (
            <Box>No post Found</Box>
          )}
        </Box>
      </Container>
    </Flex>
  );
};

export default FeedPage;
