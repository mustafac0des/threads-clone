import {
  Container,
  Flex,
  Stack,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const pathname = window.location.pathname;
      const res = await fetch(`/api/users/profile/${pathname}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setIsLoading(false);
      setUserData(data);
    };

    return () => fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <Flex alignItems={"center"} flexDirection={"column"} className={"text"}>
        <Container
          minW={["full", 480, 576, 720]}
          minH={"full"}
          my={[2, 3]}
          fontSize={50}
          fontWeight={600}
          textAlign={"center"}
          borderRadius={25}
          border={"1px solid #616161"}
          className={"lightBlack"}
        >
          Loading...
        </Container>
      </Flex>
    );
  }

  if (userData._id === null) {
    return (
      <Flex alignItems={"center"} flexDirection={"column"} className={"text"}>
        <Container
          minW={["full", 480, 576, 720]}
          minH={"98vh"}
          my={[2, 3]}
          fontSize={50}
          fontWeight={600}
          textAlign={"center"}
          borderRadius={25}
          border={"1px solid #616161"}
          className={"lightBlack"}
        >
          User Not Found!
        </Container>
      </Flex>
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
        <UserHeader user={userData} />
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
              <UserPost />
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
