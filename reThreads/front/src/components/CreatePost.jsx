/* eslint-disable react/prop-types */
import {
  Avatar,
  Button,
  Divider,
  Stack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

const CreatePost = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack
        px={3}
        py={3}
        direction={"horizontal"}
        alignItems={"center"}
        justifyContent={"space-between"}
        onClick={onOpen}
        cursor={"text"}
      >
        <Stack direction={"horizontal"} alignItems={"center"}>
          <Avatar size={["xs", "sm"]} />
          <Text fontSize={[10, 12, 14]} color={"#616161"}>
            Start a thread...
          </Text>
        </Stack>
        <Button
          w={[10, 12]}
          h={[6, 7]}
          fontSize={11}
          border={"1px solid #616161"}
          borderRadius={[10, 11]}
          className={"darkBlack"}
        >
          Post
        </Button>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalContent
          mx={[2, 1, 0]}
          borderRadius={[10, 12, 15, 20]}
          border={"1px solid #616161"}
          className={"lightBlack"}
        >
          <ModalBody ml={2} pl={0}>
            <Stack direction={"row"}>
              <Stack direction={"column"} alignItems={"center"}>
                <Avatar size={["xs", "sm"]} border={"1px solid #616161"} />
                <Divider orientation={"vertical"} />
              </Stack>
              <Stack w={"full"} direction={"column"}>
                <Text fontSize={[11, 13]} fontWeight={600}>
                  {props.name || "404"}
                </Text>
                <Textarea
                  placeholder={"Start a thread..."}
                  resize={"none"}
                  mt={-1}
                  p={0}
                  border={0}
                  _focus={{ boxShadow: "none" }}
                  fontSize={[11, 12]}
                  maxLength={400}
                />
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter p={0}>
            <Button
              mb={[2, 3]}
              mr={[2, 3]}
              size={["xs", "sm"]}
              border={"1px solid #616161"}
              borderRadius={[8, 9, 10, 12]}
              className={"darkBlack"}
              onClick={onClose}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;
