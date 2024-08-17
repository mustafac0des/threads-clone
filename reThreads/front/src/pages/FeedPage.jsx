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
  }, []);

  if (isLoading) {
    return <Box>Loading</Box>;
  }

  return (
    <Flex alignItems={"center"} flexDirection={"column"} className={"text"}>
      {user && <FeedMenu user={user} />}
      <Container
        minW={["full", 480, 576, 720]}
        borderRadius={25}
        border={"1px solid #616161"}
        className={"lightBlack"}
      >
        {user && (
          <>
            <CreatePost id={user._id} name={user.name} picture={user.picture} />
            <Divider />
          </>
        )}
        <Box
          mx={[1, 2, 3]}
          maxH={"88vh"}
          overflowY={"scroll"}
          style={{ scrollbarWidth: "none" }}
        >
          {postData.map((post) => (
            <UserPost
              key={post._id}
              postId={post._id}
              postedBy={post.postedBy._id}
              name={post.postedBy.name}
              profilePicture={post.postedBy.picture}
              uploadTime={post.createdAt}
              text={post.text}
              image={post.image}
            />
          ))}
        </Box>
      </Container>
    </Flex>
  );
};

export default FeedPage;
