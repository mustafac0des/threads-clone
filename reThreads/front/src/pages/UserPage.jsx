/* eslint-disable react/prop-types */
import {
  Avatar,
  Container,
  Flex,
  Stack,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Center,
  Box,
  Text,
  Link,
  Divider,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import Comment from "../components/Comment";

const UserPage = (props) => {
  const [userData, setUserData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [repostData, setRepostData] = useState(null);
  const [replyData, setReplyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const pathname = window.location.pathname;
      let res = await fetch(`/api/users/profile/${pathname}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const user = await res.json();
      setUserData(user);

      res = await fetch(`/api/posts/postedby/${user._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let post = await res.json();

      res = await fetch(`/api/posts/repliesuser/${user._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let reply = await res.json();

      for (let i = 0; i < post.length; i++) {
        post[i].postedBy = user;
      }

      for (let i = 0; i < reply.length; i++) {
        reply[i].userId = user;
      }

      res = await fetch(`/api/posts/repostsuser/${user._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const reposts = await res.json();

      console.log(reposts);

      setRepostData(reposts);
      console.log(repostData);
      setReplyData(reply);
      setPostData(post);
      setIsLoading(false);
    };

    return () => fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <Center m={2} color={"#616161"}>
        Loading...
      </Center>
    );
  }

  return (
    <Flex alignItems={"center"} flexDirection={"column"} className={"text"}>
      <Container
        minW={["full", 480, 576, 720]}
        minH={"98vh"}
        my={[2, 3]}
        borderRadius={25}
        border={"1px solid #616161"}
        className={"lightBlack"}
      >
        <UserHeader otherUser={userData} currentUser={props.user} />
        <Tabs colorScheme>
          <TabList justifyContent={"space-evenly"}>
            <Tab flex={1} fontSize={[10, 12, 15]} fontWeight={600}>
              Threads
            </Tab>
            <Tab flex={1} fontSize={[10, 12, 15]} fontWeight={600}>
              Replies
            </Tab>
            <Tab flex={1} fontSize={[10, 12, 15]} fontWeight={600}>
              Repost
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel as={Stack} spacing={0} pt={0} alignItems={"center"}>
              {postData.length > 0 ? (
                <>
                  {postData.map((post) => (
                    <UserPost
                      key={post._id}
                      userId={props.user._id}
                      post={post}
                    />
                  ))}
                </>
              ) : (
                <Center m={5} color={"#616161"}>
                  No Post Found!
                </Center>
              )}
            </TabPanel>
            <TabPanel>
              {replyData.length > 0 ? (
                <>
                  {replyData.map((reply) => (
                    <Comment
                      key={reply._id}
                      userId={props.user._id}
                      replyBy={reply}
                    />
                  ))}
                </>
              ) : (
                <Center m={5} color={"#616161"}>
                  User has no replies!
                </Center>
              )}
            </TabPanel>
            <TabPanel>
              {repostData.map((post) => (
                <>
                  <Box
                    as={Stack}
                    width="full"
                    direction="row"
                    spacing={3}
                    mt={5}
                  >
                    <Stack
                      direction="column"
                      alignItems="center"
                      spacing={[1, 2, 3]}
                    >
                      <Stack direction="row" spacing={3} alignItems="center">
                        <Avatar src={props.user.picture} size={["xs", "sm"]} />
                        <Text fontWeight={600} color="#616161">
                          {props.user.username} reposted
                        </Text>
                      </Stack>

                      <Stack direction="row" spacing={3}>
                        <Divider orientation="vertical" minH={"full"} />
                        <UserPost
                          key={post._id}
                          userId={props.user._id}
                          post={post}
                        />
                      </Stack>
                    </Stack>
                  </Box>
                </>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Flex>
  );
};

export default UserPage;
