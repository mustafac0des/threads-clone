import { Box } from "@chakra-ui/react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <Box w={"60%"}>
      <UserHeader />
      <Link to={"/mustafa/post/1"}>
        <UserPost
          name={"mustafa"}
          postedOn={"1d"}
          postDescription={"I like this app!"}
          image={
            "https://yt3.googleusercontent.com/gtKyyf28tXVtyjap_Oy8GhJoPh9KewrudUjjdDSEgSu7BI0fDsTwGsqlu_VekNt0xUqgeX0YLg=s176-c-k-c0x00ffffff-no-rj"
          }
          likes={26}
        />
      </Link>
      <UserPost
        name={"mustafa"}
        postedOn={"1d"}
        postDescription={"Delicious Food!"}
        image={
          "https://yt3.googleusercontent.com/gtKyyf28tXVtyjap_Oy8GhJoPh9KewrudUjjdDSEgSu7BI0fDsTwGsqlu_VekNt0xUqgeX0YLg=s176-c-k-c0x00ffffff-no-rj"
        }
        postImage={
          "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        likes={1}
      />
    </Box>
  );
};

export default UserPage;
