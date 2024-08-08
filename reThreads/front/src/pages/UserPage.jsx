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

import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
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
        <UserHeader />
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
