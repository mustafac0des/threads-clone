import {
  Container,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <Container
      minW={"720px"}
      mt={10}
      border={"1px solid #999999"}
      borderRadius={20}
    >
      <UserHeader />
      <Tabs colorScheme>
        <TabList justifyContent={"space-evenly"}>
          <Tab flex={1} fontWeight={600}>
            Threads
          </Tab>
          <Tab flex={1} fontWeight={600}>
            Replies
          </Tab>
          <Tab flex={1} fontWeight={600}>
            Repost
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <UserPost />
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
  );
};

export default UserPage;
