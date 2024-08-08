/* eslint-disable react/prop-types */
import { Avatar, Box, Link, Stack, Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import UserUpdate from "./UserUpdate";

const UserHeader = (props) => {
  const user = useRecoilState(userAtom);

  return (
    <Box mt={[2, 3, 4, 5]} mx={[2, 3, 4, 5]} mb={0}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"column"} spacing={0}>
          <Text fontSize={[16, 18, 20]} fontWeight={700}>
            {user[0].name}
          </Text>
          <Stack direction={"row"} ml={0.5} alignItems={"center"}>
            <Text fontSize={[9, 11, 13]}>{user[0].username}</Text>
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
          size={"lg"}
          border={"1px solid #616161"}
          src={user[0].picture}
        />
      </Stack>
      <Text maxW={"75%"} m={0.5} mt={3} fontSize={[9, 11, 13]}>
        {user[0].biography}
      </Text>
      <Stack direction={"row"} spacing={0} color={"#616161"}>
        <Text fontSize={[9, 11, 13]}>{user[0].followers.length} followers</Text>
        {props.link ? (
          <>
            <Text>・</Text>
            <Link to={props.link}>{props.link}</Link>
          </>
        ) : null}
      </Stack>
      {user && <UserUpdate />}
    </Box>
  );
};

export default UserHeader;
