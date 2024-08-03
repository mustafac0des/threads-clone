import {
  Container,
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
    <Stack
      mt={[1, 2, 3, 4, 5, 6, 7]}
      alignItems={"center"}
      overflow={"hidden"}
      className={"text"}
    >
      <Container
        minW={["full", "480px", "576px", "720px"]}
        mt={[1, 2, 3, 4, 5, 6, 7]}
        borderRadius={"25"}
        border={"1px solid #616161"}
        className={"container"}
      >
        <UserHeader />
        <Tabs colorScheme>
          <TabList justifyContent={"space-evenly"}>
            <Tab flex={1} fontSize={["10px", "12px", "15px"]} fontWeight={600}>
              Threads
            </Tab>
            <Tab flex={1} fontSize={["10px", "12px", "15px"]} fontWeight={600}>
              Replies
            </Tab>
            <Tab flex={1} fontSize={["10px", "12px", "15px"]} fontWeight={600}>
              Repost
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel as={Stack} spacing={0} pt={0} alignItems={"center"}>
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
    </Stack>
  );
};

export default UserPage;

{
  /*
   */
}
