/* eslint-disable react/prop-types */
import { Box, Image, Link, Stack, Text } from "@chakra-ui/react";
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
          <Text fontSize={["16px", "18px", "20px"]} fontWeight={700}>
            {user[0].name}
          </Text>
          <Stack direction={"row"} ml={0.5} alignItems={"center"}>
            <Text fontSize={["9px", "11px", "13px"]}>{user[0].username}</Text>
            <Text
              px={1}
              fontSize={["8px", "9px", "10px"]}
              text
              color={"#F0F0F0"}
              bg={"#616161"}
              borderRadius={"9px"}
            >
              threads.net
            </Text>
          </Stack>
        </Stack>

        <Box>
          <Image
            src={user[0].picture}
            width={["45px", "55px", "65px"]}
            border={"1px solid #616161"}
            borderRadius={"100%"}
          />
        </Box>
      </Stack>
      <Text maxW={"75%"} m={0.5} mt={3} fontSize={["9px", "11px", "13px"]}>
        {user[0].biography}
      </Text>
      <Stack direction={"row"} spacing={0} m={0.5} className={"icon"}>
        <Text fontSize={["9px", "11px", "13px"]}>
          {user[0].followers.length} followers
        </Text>
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
