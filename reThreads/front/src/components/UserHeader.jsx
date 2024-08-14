/* eslint-disable react/prop-types */
import { Avatar, Box, Button, Link, Stack, Text } from "@chakra-ui/react";

import { useRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";

import UserUpdate from "./UserUpdate";

const UserHeader = (props) => {
  const currentUser = useRecoilState(userAtom);

  return (
    <Box mt={[2, 3, 4, 5]} mx={[2, 3, 4, 5]} mb={0}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"column"} spacing={0}>
          <Text fontSize={[16, 18, 20]} fontWeight={700}>
            {props.user.name}
          </Text>
          <Stack direction={"row"} ml={0.5} alignItems={"center"}>
            <Text fontSize={[9, 11, 13]}>{props.user.username}</Text>
            <Text
              px={1}
              fontSize={[8, 9, 10]}
              text
              color={"#F0F0F0"}
              bg={"#616161"}
              borderRadius={9}
            >
              threads.net
            </Text>
          </Stack>
        </Stack>

        <Avatar
          size={["md", "lg"]}
          border={"1px solid #616161"}
          src={props.user.picture}
        />
      </Stack>
      {currentUser[0]._id !== props.user._id && (
        <Button
          size={["xxs", "sm"]}
          p={1}
          borderRadius={[5, 15]}
          bg={"#616161"}
          color={"#FAFAFA"}
        >
          <Text fontSize={[10, 12]}>
            {currentUser[0].following.includes(props.user.following._id)
              ? "Following"
              : "Follow"}
          </Text>
        </Button>
      )}
      <Text maxW={"75%"} m={0.5} mt={3} fontSize={[9, 11, 13]}>
        {props.user.biography}
      </Text>
      <Stack direction={"row"} spacing={0} color={"#616161"}>
        <Text fontSize={[9, 11, 13]}>
          {props.user.followers.length} followers
        </Text>
        {props.link ? (
          <>
            <Text>・</Text>
            <Link to={props.link}>{props.link}</Link>
          </>
        ) : null}
      </Stack>
      {currentUser[0]._id === props.user._id && <UserUpdate />}
    </Box>
  );
};

export default UserHeader;
