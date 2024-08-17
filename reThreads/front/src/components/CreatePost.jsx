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
  Input,
  Image,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import useCustomToast from "../hooks/useCustomToast";
import usePreviewImage from "../hooks/usePreviewImage";

const CreatePost = (props) => {
  const showToast = useCustomToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [post, setPost] = useState({ text: "", picture: "" });
  const fileRef = useRef(null);
  const { imgUrl, handleImgChange } = usePreviewImage();

  const postCreate = async () => {
    if (post.text.length < 9 || post.text.length > 500) {
      return showToast(
        "Text length should be in between 10 to 200 characters!",
        "error",
      );
    }

    showToast("Posting...", "info");

    post.picture = imgUrl;

    try {
      console.log(props.id);
      const res = await fetch(`/api/posts/create/${props.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      const data = await res.json();

      if (data.status === 200) {
        showToast(data.message, "success");
      } else {
        showToast(data.message, "error");
      }
    } catch {
      showToast("Error while creating the post!", "error");
    }
  };

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
          <Avatar src={props.picture} size={["xs", "sm"]} />
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
          maxH={[1000]}
          mx={[2, 1, 0]}
          borderRadius={[10, 12, 15, 20]}
          border={"1px solid #616161"}
          className={"lightBlack"}
        >
          <ModalBody ml={2} pl={0}>
            <Stack direction={"row"}>
              <Stack direction={"column"} alignItems={"center"}>
                <Avatar
                  size={["xs", "sm"]}
                  src={props.picture}
                  border={"1px solid #616161"}
                />
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
                  maxLength={500}
                  onChange={(e) => setPost({ ...post, text: e.target.value })}
                />
                {imgUrl && (
                  <Image
                    src={imgUrl}
                    boxSize={[200]}
                    border={"1px solid #616161"}
                    borderRadius={[7, 10, 15]}
                    objectFit={"contain"}
                  />
                )}
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter p={0}>
            <Input type={"file"} ref={fileRef} onChange={handleImgChange} />
            <Button
              mb={[2, 3]}
              mr={[2, 3]}
              size={["xs", "sm"]}
              border={"1px solid #616161"}
              borderRadius={[8, 9, 10, 12]}
              className={"darkBlack"}
              onClick={postCreate}
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
