/* eslint-disable react/prop-types */
import { useRecoilValue } from "recoil";

import { Box, Container, Flex, Divider } from "@chakra-ui/react";

import UserPost from "../components/UserPost";
import FeedMenu from "../components/FeedMenu";
import CreatePost from "../components/CreatePost";
import userAtom from "../atoms/userAtom";

const FeedPage = () => {
  const user = useRecoilValue(userAtom);

  return (
    <Flex alignItems={"center"} flexDirection={"column"} className={"text"}>
      {user && <FeedMenu />}
      <Container
        minW={["full", 480, 576, 720]}
        borderRadius={25}
        border={"1px solid #616161"}
        className={"lightBlack"}
      >
        {user && (
          <>
            <CreatePost />
            <Divider />
          </>
        )}
        <Box
          mx={[1, 2, 3]}
          maxH={"88vh"}
          overflowY={"scroll"}
          style={{ scrollbarWidth: "none" }}
        >
          <UserPost
            profilePicture={""}
            uploadTime={"1h"}
            text={""}
            image={
              "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </Box>
      </Container>
    </Flex>
  );
};

export default FeedPage;
