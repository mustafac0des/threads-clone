/* eslint-disable react/prop-types */
import { Text, Box, Image, Link, Stack } from "@chakra-ui/react";

const UserHeader = (props) => {
  return (
    <Box m={5}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"column"} spacing={0}>
          <Text fontSize={"xl"} fontWeight={700}>
            {props.name || "Name Not Found!"}
          </Text>
          <Stack direction={"row"} ml={0.5}>
            <Text>{props.username || "username"}</Text>
            <Text
              p={1}
              fontSize={"xs"}
              color={"#F0F0F0"}
              bg={"#616161"}
              borderRadius={"xl"}
            >
              threads.net
            </Text>
          </Stack>
        </Stack>

        <Box>
          <Image
            src={
              props.profilePicture ||
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            width={"65px"}
            border={"1px solid #616161"}
            borderRadius={"100%"}
          />
        </Box>
      </Stack>
      <Text maxW={"75%"} m={0.5} mt={3}>
        {props.biography || "Hey there! I'm using Threads!"}
      </Text>
      <Stack direction={"row"} spacing={0} m={0.5} className={"icon"}>
        <Text>{props.followers || "0"} followers</Text>
        {props.link ? (
          <>
            <Text>・</Text>
            <Link to={props.link}>{props.link}</Link>
          </>
        ) : null}
      </Stack>
    </Box>
  );
};

export default UserHeader;
