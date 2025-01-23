/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { Box, Center, Container, Flex, Divider } from "@chakra-ui/react";

import UserPost from "../components/UserPost";
import FeedMenu from "../components/FeedMenu";
import CreatePost from "../components/CreatePost";

const FeedPage = (props) => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`/api/posts/feed/${props.user._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setPost(data);
      } else if (Array.isArray(data.posts)) {
        setPost(data.posts);
      } else {
        setPost([]); 
      }

      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching posts:", err.message);
      setPost([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Box color={"#616161"}>Loading...</Box>;
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
          {Array.isArray(post) && post.length > 0 ? (
            post.map((postItem) => (
              <UserPost
                key={postItem._id}
                userId={props.user._id}
                post={postItem}
              />
            ))
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
