/* eslint-disable react/prop-types */
import {
  Container,
  Flex,
  Stack,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Center,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = (props) => {
  const [userData, setUserData] = useState(null);
  const [postData, setPostData] = useState(null);
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

      for (let i = 0; i < post.length; i++) {
        post[i].postedBy = user;
      }

      console.log;

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
              <p>Replies</p>
            </TabPanel>
            <TabPanel>
              <p>Reposts</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Flex>
  );
};

export default UserPage;
