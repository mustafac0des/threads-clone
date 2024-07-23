/* eslint-disable react/prop-types */
import { Text, Box, Button, Image, Link, Stack } from "@chakra-ui/react";

const UserHeader = (props) => {
  const isLoggedIn = true;
  return (
    <Box mt={[2, 3, 4, 5]} mx={[2, 3, 4, 5]} mb={0}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"column"} spacing={0}>
          <Text fontSize={["16px", "18px", "20px"]} fontWeight={700}>
            {props.name || "Name Not Found!"}
          </Text>
          <Stack direction={"row"} ml={0.5} alignItems={"center"}>
            <Text fontSize={["9px", "11px", "13px"]}>
              {props.username || "username"}
            </Text>
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
            src={
              props.profilePicture ||
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            width={["45px", "55px", "65px"]}
            border={"1px solid #616161"}
            borderRadius={"100%"}
          />
        </Box>
      </Stack>
      <Text maxW={"75%"} m={0.5} mt={3} fontSize={["9px", "11px", "13px"]}>
        {props.biography || "Hey there! I'm using Threads!"}
      </Text>
      <Stack direction={"row"} spacing={0} m={0.5} className={"icon"}>
        <Text fontSize={["9px", "11px", "13px"]}>
          {props.followers || "0"} followers
        </Text>
        {props.link ? (
          <>
            <Text>・</Text>
            <Link to={props.link}>{props.link}</Link>
          </>
        ) : null}
      </Stack>
      {isLoggedIn && (
        <Button
          w={"full"}
          h={"auto"}
          my={3}
          py={1.5}
          fontSize={["7px", "9px", "11px"]}
          border={"1px solid #616161"}
        >
          Edit Profile
        </Button>
      )}
    </Box>
  );
};

export default UserHeader;
