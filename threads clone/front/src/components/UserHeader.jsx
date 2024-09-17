/* eslint-disable react/prop-types */
import { Avatar, Box, Button, Link, Stack, Text } from "@chakra-ui/react";

import UserUpdate from "./UserUpdate";
import useCustomToast from "../hooks/useCustomToast";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";

const UserHeader = (props) => {
  const showToast = useCustomToast();
  const setUser = useSetRecoilState(userAtom);

  const userFollowUnfollow = async () => {
    try {
      const res = await fetch(
        `/api/users/followUnfollow/${props.otherUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await res.json();

      if (data.status === 200) {
        localStorage.setItem("user-threads", JSON.stringify(data.user));
        setUser(data.user);
        window.location.reload();
        return showToast(data.message, "success");
      } else {
        return showToast(data.message, "error");
      }
    } catch (err) {
      return showToast(err.message, "error");
    }
  };

  return (
    <Box mt={[2, 3, 4, 5]} mx={[2, 3, 4, 5]} mb={0}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"column"} spacing={0}>
          <Text fontSize={[16, 18, 20]} fontWeight={700}>
            {props.otherUser.name}
          </Text>
          <Stack direction={"row"} ml={0.5} alignItems={"center"}>
            <Text fontSize={[9, 11, 13]}>{props.otherUser.username}</Text>
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
          src={props.otherUser.picture}
        />
      </Stack>
      {props.currentUser._id !== props.otherUser._id && (
        <Button
          size={["xxs", "sm"]}
          p={1}
          borderRadius={[5, 15]}
          bg={"#616161"}
          color={"#FAFAFA"}
          onClick={userFollowUnfollow}
        >
          <Text fontSize={[10, 12]}>
            {props.currentUser.following.includes(props.otherUser._id)
              ? "Follow"
              : "Following"}
          </Text>
        </Button>
      )}
      <Text maxW={"75%"} m={0.5} mt={3} fontSize={[9, 11, 13]}>
        {props.otherUser.biography}
      </Text>
      <Stack direction={"row"} spacing={0} color={"#616161"}>
        <Text fontSize={[9, 11, 13]}>
          {props.otherUser.followers.length} followers
        </Text>
        {props.link ? (
          <>
            <Text>・</Text>
            <Link to={props.link}>{props.link}</Link>
          </>
        ) : null}
      </Stack>
      {props.currentUser._id === props.otherUser._id && <UserUpdate />}
    </Box>
  );
};

export default UserHeader;
