/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Actions } from "./Actions";

const FeedbackPost = (props) => {
  return (
    <Container maxW={"full"} my={5}>
      <Stack direction={"row"} spacing={3} alignItems={"flex-start"}>
        <Box w={"45px"} className={"icon"}>
          <Image
            src={
              props.profilePicture ||
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            border={"1px solid #999999"}
            borderRadius={"full"}
          />
        </Box>
        <Stack w={"full"} direction={"column"}>
          <Flex w={"full"} justifyContent={"space-between"}>
            <Stack direction={"row"}>
              <Text fontWeight={600}>{props.name || "Mustafa"}</Text>
              <Text fontWeight={200} className={"icon"}>
                {props.uploadTime || "n/a"}
              </Text>
            </Stack>
            <Button h={7} right={0} bg={"unset"} borderRadius={"full"}>
              <FontAwesomeIcon icon={faEllipsis} />
            </Button>
          </Flex>
          <Box mt={-2} fontSize={13}>
            <Text>{props.text || "Nothing's here!"}</Text>
            {props.image ? (
              <Image
                src={props.image}
                maxH={300}
                mt={2}
                objectFit={"cover"}
                border={"1px solid #999999"}
                borderRadius={5}
              />
            ) : null}
            <Actions />
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default FeedbackPost;
