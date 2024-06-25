import { Container } from "@chakra-ui/react";

import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";

const UserPage = () => {
  return (
    <Container maxW={"80%"} centerContent>
      <UserHeader />
      <UserPosts />
    </Container>
  );
};

export default UserPage;
