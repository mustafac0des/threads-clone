/* eslint-disable react/prop-types */
import {
  Flex,
  Button,
  Text,
  Image,
  Box,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Comment from "../components/Comment";
import { Actions } from "../components/Actions";

const More = () => (
  <Button h={0} color={"gray.light"}>
    <FontAwesomeIcon size={"sm"} icon={faEllipsis} />
  </Button>
);

const PostPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w={"2xl"}
      mt={5}
      mx={1}
      p={5}
      borderRadius={"25px"}
      border={"2px solid"}
      borderColor={"gray.light"}
      gap={2}
      bg={"#181818"}
      flexDirection={"column"}
      style={{ backgroundColor: colorMode == "dark" ? "#181818" : "#FFFFFF" }}
    >
      <Flex width={"full"} flexDirection={"column"} gap={5}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={1} alignItems={"center"}>
            <Box>
              <Image
                src={
                  "https://yt3.ggpht.com/gtKyyf28tXVtyjap_Oy8GhJoPh9KewrudUjjdDSEgSu7BI0fDsTwGsqlu_VekNt0xUqgeX0YLg=s88-c-k-c0x00ffffff-no-rj"
                }
                w={"40px"}
                borderRadius={"100%"}
                mr={2}
                border={"1px solid"}
                borderColor={"gray.light"}
              />
            </Box>
            <Text fontWeight={"bold"}>mustafa</Text>
            <Text color={"gray.light"}>1d</Text>
          </Flex>
          <More />
        </Flex>
        <Box>
          <Text ml={1}>Delicious Food!</Text>
          <Image
            src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            mt={2}
            mb={1}
            borderRadius={"xl"}
            maxH={"sm"}
            border={"0.25px solid"}
            borderColor={"gray.light"}
          />
          <Actions likes={9} />
        </Box>
        <Divider />
        <Box>
          <Text fontWeight={"bold"} ml={1}>
            Replies
          </Text>
          <Divider mt={5} />
          <Comment
            image={
              "https://i.pinimg.com/736x/84/ef/2f/84ef2f73675b0e8c840a56184059f8bc.jpg"
            }
            commenterName={"PTiara"}
            commentedOn={"1h"}
            comment={"Yummy! <3"}
            likes={0}
          />
          <Comment
            image={
              "https://i.pinimg.com/736x/84/ef/2f/84ef2f73675b0e8c840a56184059f8bc.jpg"
            }
            commenterName={"PTiara"}
            commentedOn={"1h"}
            comment={"Yummy! <3"}
            likes={0}
          />
          <Comment
            image={
              "https://i.pinimg.com/736x/84/ef/2f/84ef2f73675b0e8c840a56184059f8bc.jpg"
            }
            commenterName={"PTiara"}
            commentedOn={"1h"}
            comment={"Yummy! <3"}
            likes={0}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default PostPage;
